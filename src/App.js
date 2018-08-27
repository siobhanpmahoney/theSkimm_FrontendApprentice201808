import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Nav from './components/Nav/Nav'

class App extends Component{
  render () {
    return (
      <div>
        <h1 className="heading heading--main">States and Countries</h1>
        <Nav />
        {/* Use react router and your custom components to complete the task. */}
        <Switch>
          <Route>
            <div className="home">
              <h2 className="heading">Welcome to the States and Countries app.</h2>
              <p className="copy">Select a topic above!</p>
            </div>
          </Route>
        </Switch>

      </div>
    )
  }
}
export default App
