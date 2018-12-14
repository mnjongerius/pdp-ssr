import React from 'react'
import { BrowserRouter, StaticRouter, Route } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'

export default ({ onServer, path }) => {
  const Router = onServer ? StaticRouter : BrowserRouter
  return (
    <Router location={path}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  )
}
