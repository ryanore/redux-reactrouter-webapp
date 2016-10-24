import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { AppContainer } from 'react-hot-loader'
const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  MOUNT_NODE);

if(module.hot) {
  require('./utils/dev-hot-load-utils');
}
