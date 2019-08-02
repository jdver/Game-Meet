import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Games from './pages/games'
import Home from './pages/home'

function App () {
  return (
    <div>
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/games' component={Games} />
        </div>
      </Router>
    </div>
  )
}

export default App
