import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Nav from './components/Nav/Nav'
import Home from './components/Home'

class App extends Component{
  render () {
    return (
      <div>
        <h1 className="heading heading--main">States and Countries</h1>
        <Nav />
        {/* Use react router and your custom components to complete the task. */}
        <Switch>

{/* Moved jsx elements for homepage into separate component /Home.js */}
        <Route exact path="/" component={Home} />

        </Switch>

      </div>
    )
  }
}
export default App
