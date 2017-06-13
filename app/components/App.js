import React from 'react'
import {HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './Nav'
import MainApp from './MainApp'
import About from './About'
import Weather from './Weather'
import Examples from './Examples'

class App extends React.Component{
  render() {
    return (
      <HashRouter>
        <MainApp>
          <Nav/>
          <Switch>
            <Route exact path='/' component={Weather} />
            <Route  path='/about' component={About} />
            <Route  path='/examples' component={Examples} />
          </Switch>
        </MainApp>
      </HashRouter>
    )
  }
}

module.exports = App;
