import React from 'react'
import { Provider } from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import createStore from '../store'
import AppContainer from './app-container'
import Page404 from './page-404'

const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)


export default (props) => {
  return(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
          <Route path="*" component={Page404} />
        </Route>
      </Router>
    </Provider>
  )
}
