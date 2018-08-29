import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Nav from './components/Nav/Nav'
import Home from './components/Home'
import Container from './components/Feature/Container'

// importing functions responsible for fetching lists
import { fetchCountries } from './api/countries'
import { fetchStates } from './api/states'


class App extends Component {
  render () {
    return (
      <div>
        <h1 className="heading heading--main">States and Countries</h1>
        <Nav />
        {/* Use react router and your custom components to complete the task. */}
        <Switch>

          {/* Moved jsx elements for homepage into separate "Home" component  */}
          <Route exact path='/' component={Home} />



          {/* Routes for /states and /countries  */}
          <Route exact path='/countries' render={() => {
            return <Container title='Countries' fetchFunction = {fetchCountries} /> }
          } />

          <Route exact path='/states' render={() => {
            return <Container title='States' fetchFunction = {fetchStates} />  }
          } />



        {/* Redirects to Home if path does not match "/", "/states", or "/countries" */}
          <Redirect to='/' />

        </Switch>



      </div>
    )
  }
}

export default App
