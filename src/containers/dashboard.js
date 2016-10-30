import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import EmployeeDashboard from './employee-dashboard'
import CustomerDashboard from './customer-dashboard'

/**
 * This class should decide which dashboard to serve up
 * If the user is not loggedIn it should redirect to /login
 */
class DashboardContainer extends Component {
  componentWillMount() {
    !this.props.loggedIn  &&  browserHistory.push('/login')
  }

  render(){
    switch(this.props.user.role) {
      case 'customer':
        return <CustomerDashboard />
      case 'employee':
        return <EmployeeDashboard />
    }
  }
}


const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  user: state.auth.user
})

export default connect(mapStateToProps)(DashboardContainer);
