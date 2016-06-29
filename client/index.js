
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import 'react-mdl/extra/css/material.blue_grey-light_blue.min.css'
import 'react-mdl/extra/material.js'

import Dashboard from './containers/Dashboard'
import AemStackPanel from './containers/AemStackPanel'
import configure from './store'

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Dashboard} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
