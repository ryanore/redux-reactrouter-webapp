import React, {Component, PropTypes} from 'react'
import { browserHistory, Link } from 'react-router'
import { connect } from 'react-redux'
import {setClientKey} from '../actions/a.dashboard'
import {relativePath} from '../utils/url'

class CustomerDashboard extends Component {

  componentWillReceiveProps(newProps) {
    const {dashboard, params, user} = this.props;
    if( !dashboard.currentClient ) {
      if(user.role === 'employee') {
        this.props.setClientKey(params.key)
      }
      else if(user.role === 'customer') {
        this.props.setClientKey(user.key)
      }
    }
  }

  render(){
    const {dashboard, user} = this.props
    const path = `/dashboard/${dashboard.currentClient}`

    return(
      <div>
         {user.cn} <br />
       Customer Dashboard
        <ul>
          <li><Link to={`${path}`} >Overview</Link></li>
          <li><Link to={`${path}/medical`} >Medical</Link></li>
          <li><Link to={`${path}/dental`} >Dental</Link></li>
          <li><Link to={`${path}/feedback`}>Customer Feedback</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dashboard: state.dashboard,
  user: state.user
})

export default connect(mapStateToProps,{
  setClientKey
})(CustomerDashboard);
