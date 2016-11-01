import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'


class CustomerDashboard extends Component {
  render(){
    return(
      <div>Customer Dashboard</div>
    )
  }
}


const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(CustomerDashboard);
