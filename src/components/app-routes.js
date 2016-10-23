import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './app-container'
import Page404 from './page-404'

const loggedIn = true

export default (
  <Route path="/" component={App}>
    <Route path="*" component={Page404} />
  </Route>
)
