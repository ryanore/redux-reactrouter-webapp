import { combineReducers } from 'redux';
import authReducer from './r.auth';

export default  combineReducers({
  auth: authReducer
});
