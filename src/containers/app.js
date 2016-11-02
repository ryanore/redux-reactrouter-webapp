import React, {Component} from 'react'
import {Provider, connect} from 'react-redux'
import {Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router'
import AuthenticatedComponent from './authenticated-component'
import AppContainer from './app-container'
import LogIn from './login'
import DashboardContainer from './dashboard-container'
import CustomerDashboard from './dashboard-customer'
import BrokerDashboard from './dashboard-broker'

import PageTest from '../components/page-test'
import Page403 from '../components/page-403'
import Page404 from '../components/page-404'
import PageAbout from '../components/page-about'
import PageHome from '../components/page-home'
import DashboardFeedback from '../components/dashboard-feedback'
import DashboardOverview from '../components/dashboard-overview'
import DashboardModule from '../components/dashboard-module'
import {verifyUserToken} from '../actions/a.auth'

class App extends Component {

  componentWillMount() {
    this.props.verifyUserToken()
  }

  render() {
    const role = this.props.auth.user.role;

    if(!this.props.auth.tokenVerified) {
      return <h1>Checking Token</h1>
    }

    return(
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={PageHome} />
          <Route path="/login" component={LogIn} />
          <Route path="/about" component={PageAbout} />
          <Route path="/403" component={Page403} />

          <Route path="/dashboard" component={AuthenticatedComponent(DashboardContainer)}>
            <IndexRoute component={DashboardOverview} />
            {(!role  || ['broker', 'pargner'].includes(role)) &&
              <div>
                <Route path="/dashboard/feedback" component={DashboardFeedback} />
                <Route path="/dashboard/:module" component={DashboardModule} />
              </div>
            }
          </Route>

          <Route path="*" component={Page404} />
        </Route>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, {
  verifyUserToken
})( App )
