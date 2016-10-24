import { combineReducers } from 'redux'
import authReducer from './r.auth'

export const makeRootReducer = () => {
  return combineReducers({
    auth: authReducer
  })
}


export default makeRootReducer
