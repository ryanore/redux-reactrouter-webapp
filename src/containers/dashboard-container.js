import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import CustomerDashboard from './dashboard-customer'
import BrokerDashboard from './dashboard-broker'
import {intersects} from '../utils/array'

/**
 * Router for Dashboard
 * - Confirm they're logged in or redirect to /login
 * - Confirm their role and serve the correct Dashboard compoennt
 */
class DashboardContainer extends Component {
  componentWillMount() {
    this.checkAuth(this.props)
  }

  shouldComponentUpdate(newProps) {
    if (!this.checkAuth(newProps) ){
      return false
    }
  }

  checkAuth(props) {
    const{auth, router, location} = props;

    if(!auth.loggedIn) {
      router.push({
        pathname: '/login',
        query: {
          r: location.pathname
        }
      })
      return false
    }

    if(intersects(auth.user.roles, ['customer', 'employee'])) {
      this.Dashboard = CustomerDashboard;
    }

    else if(intersects(auth.user.roles, ['broker', 'partner'])) {
      this.Dashboard = BrokerDashboard;
    }
  }

  render(){
    return(
      this.props.auth.loggedIn
      ? <this.Dashboard {...this.props}/>
      : null
    )
  }
}


const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(DashboardContainer);
