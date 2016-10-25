import React from 'react'
import ReactDOM from 'react-dom'
import RootApp from './components/app'
import { AppContainer } from 'react-hot-loader'
import createStore from './store'

const MOUNT_NODE = document.getElementById('root')
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

ReactDOM.render(
  <RootApp store={store} />,
  MOUNT_NODE
)
