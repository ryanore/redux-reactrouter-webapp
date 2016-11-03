import { combineReducers } from 'redux'
import authReducer from './r.auth'
import dashboardReducer from './r.dashboard'

export default combineReducers({
	auth: authReducer,
  dashboard: dashboardReducer
});
