import React, {Component} from 'react'
import { connect } from 'react-redux'
import {intersects} from '../utils/array'
import CustomerDashboard from './dashboard-customer'
import BrokerDashboard from './dashboard-broker'
import EmployeeHeader from './employee-header'
import {fetchClientList, setClientKey} from '../actions/a.dashboard'


class DashboardContainer extends Component {

  componentWillMount() {
    this.checkAuth(this.props)
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
  }


  userIs(role) {
    if(!this.props.auth.user.roles){
      return false
    }
    return intersects( this.props.auth.user.roles, [role])
  }


  render(){
    return(
      <div>
        {this.userIs('employee') &&
          <EmployeeHeader {...this.props} />
        }
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  dashboard: state.dashboard
})

export default connect(mapStateToProps,{
  fetchClientList,
  setClientKey
})(DashboardContainer);
