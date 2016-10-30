import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import rootReducer from '../reducers';

export default (initialState = {}) => {
  const middleware = [thunk, promise]
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware)
    )
  )
  return store
}
