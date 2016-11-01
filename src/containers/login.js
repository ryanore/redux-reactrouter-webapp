import React, {Component} from 'react'
import { connect } from 'react-redux'
import {browserHistory} from 'react-router'
import {logInUser} from '../actions/a.auth.js'

class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'firstemployee',
      password: '123456'
    }
  }

  /**
   * TODO: set query string to direct them back to intended location
   */
  handleSubmit(e) {
    e.preventDefault();
    const redirect = this.props.router.location.query.r;
    this.props.logInUser(this.state.username, this.state.password, redirect)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <input
            name="username"
            onChange={(e) => this.setState({value: e.target.value})}
            value={this.state.username}
          />
          <input
            type="password"
            name="password"
            onChange={(e) => this.setState({email: e.target.value})}
            value={this.state.password}
          />
          <button onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(
  mapStateToProps,
  {logInUser}
)(LogIn)
