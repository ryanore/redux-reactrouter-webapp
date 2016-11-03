import React, {Component, PropTypes} from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import {setClientKey} from '../actions/a.dashboard'


class CustomerDashboard extends Component {
  componentWillMount() {
    this.props.setClientKey(this.props.params.key)
  }

  render(){
    return(
      <div>
        Customer Dashboard
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dashboard: state.dashboard
})

export default connect(mapStateToProps,{
  setClientKey
})(CustomerDashboard);
