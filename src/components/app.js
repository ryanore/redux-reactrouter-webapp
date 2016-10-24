import React from 'react'
import { Provider } from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import AppContainer from './app-container'
import Page404 from './page-404'


export default (props) => {
  return(
    <Provider store={props.store}>
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
          <Route path="*" component={Page404} />
        </Route>
      </Router>
    </Provider>
  )
}
