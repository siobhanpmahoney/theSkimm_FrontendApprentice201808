import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Nav from './components/Nav/Nav'
import Home from './components/Home'
// import CountryContainer from './components/countries/CountryContainer'
import StateContainer from './components/states/StateContainer'
import Container from './components/Container'
import { fetchCountries } from './api/countries'
import { fetchStates } from './api/states'


class App extends Component {

  constructor() {
    super()


    this.state = {
      countries: []
    }

    this.fetchCountries = fetchCountries.bind(this)
    this.fetchStates = fetchStates.bind(this)
  }


  componentDidMount() {
    // this.fetchCountries().then(values => {
    //   this.setState({
    //     countries: values
    //   })
    // })
  }






  render () {
    // let {countries} = this.fetchCountries().then(async values => values )



    return (
      <div>
        <h1 className="heading heading--main">States and Countries</h1>
        <Nav />
        {/* Use react router and your custom components to complete the task. */}
        <Switch>

{/* Moved jsx elements for homepage into separate component /Home.js */}
        <Route exact path="/" component={Home} />

{/*        <Route exact path="/states" component={StateContainer} /> */}

          <Route exact path='/countries' render={ () => {
            return <Container fetchFunction = {this.fetchCountries} />  }}
          />

        <Route exact path='/states' render={ () => {
            return <Container fetchFunction = {this.fetchStates} />  }}
          />


        </Switch>

      </div>
    )
  }
}

export default App
