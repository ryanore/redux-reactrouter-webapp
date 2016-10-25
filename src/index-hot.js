import React from 'react'
import ReactDOM from 'react-dom'
import RootApp from './components/app'
import { AppContainer } from 'react-hot-loader'
import createStore from './store'

const MOUNT_NODE = document.getElementById('root')
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

const renderApp = (App) => {
  ReactDOM.render(
    <AppContainer>
      <App store={store} />
    </AppContainer>,
    MOUNT_NODE
  )
}


if(module.hot) {
  // suppress react-router errors
  require('./utils/react-router-error-suppress').default()

  // enable hot-reloader on app
  module.hot.accept("./components/app", () => {
    const NextApp = require("./components/app").default
    renderApp(NextApp)
  });

  // enable hot-reloading on store
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default;
    store.replaceReducer(nextRootReducer);
  })
}

renderApp(RootApp);
