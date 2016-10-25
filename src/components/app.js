import React from 'react'
import { Provider } from 'react-redux'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import AppContainer from './app-container'
import Page404 from './page-404'
import PageAbout from './page-about'
import Home from './page-home'

export default (props) => {
  return(
    <Provider store={props.store}>
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={Home} />
          <Route path="*" component={Page404} />
        </Route>
      </Router>
    </Provider>
  )
}
