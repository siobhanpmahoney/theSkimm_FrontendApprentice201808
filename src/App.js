import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Nav from './components/Nav/Nav'
import Home from './components/Home'
import Container from './components/Container'
import { fetchCountries } from './api/countries'
import { fetchStates } from './api/states'


class App extends Component {

  constructor() {
    super()

    this.fetchCountries = fetchCountries.bind(this)
    this.fetchStates = fetchStates.bind(this)
  }



  render () {



    return (
      <div>
        <h1 className="heading heading--main">States and Countries</h1>
        <Nav />
        {/* Use react router and your custom components to complete the task. */}
        <Switch>

          {/* Moved jsx elements for homepage into separate component /Home.js */}
          <Route exact path="/" component={Home} />

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
