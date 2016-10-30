import React from 'react'
import {Provider, connect} from 'react-redux'
import {Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router'
import AppContainer from '../containers/app-container'
import LogIn from './login'
import CustomerDashboard from './customer-dashboard'
import BrokerDashboard from './broker-dashboard'

import Page403 from '../components/page-403'
import Page404 from '../components/page-404'
import PageAbout from '../components/page-about'
import PageHome from '../components/page-home'
import DashboardFeedback from '../components/dashboard-feedback'
import DashboardOverview from '../components/dashboard-overview'
import DashboardModule from '../components/dashboard-module'

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)( (props) => {
  const loggedIn = props.loggedIn
  const role = props.auth.user.role

  const checkAuth = () => (!loggedIn && browserHistory.push('/login'))

  return(
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={PageHome} />
        <Route path="/login" component={LogIn} />
        <Route path="/about" component={PageAbout} />
        <Route path="/login" component={LogIn} />
        <Route path="/403" component={Page403} />

        {['customer', 'employee'].includes(role) &&
          <Route path="/dashboard" component={CustomerDashboard} onEnter={checkAuth}>
            <Route path="/dashboard/overview" component={DashboardOverview} />
            <Route path="/dashboard/feedback" component={DashboardFeedback} />
            <Route path="/dashboard/:module" component={DashboardModule} />
          </Route>
        }

        {['broker', 'partner'].includes(role) &&
          <Route path="/dashboard" component={BrokerDashboard} onEnter={checkAuth} />
        }
        <Route path="*" component={Page404} />
      </Route>
    </Router>
  )
})
