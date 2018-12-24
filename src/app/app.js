import React from 'react'
import { BrowserRouter, StaticRouter, Route } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import { Provider } from 'react-redux'
import { configureStore } from './reducers'

const store = configureStore()

export default ({ onServer, path }) => {
  const context = {}
  const Router = onServer ? StaticRouter : BrowserRouter
  return (
    <Provider store={store}>
      <Router location={path} context={context}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
    </Provider>
  )
}
