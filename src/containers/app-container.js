import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import Header from '../components/app-header'
import Footer from '../components/app-footer'
import {logInUser, logOutUser} from '../actions/a.auth'

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps,{
  logInUser,
  logOutUser
})( (props) => {
  return(
    <div className="app-container">
      <Header
        loggedIn={props.auth.loggedIn}
        logIn={props.logInUser}
        logOut={props.logOutUser}
      />
      {props.children}
      <Footer role={props.user}/>
    </div>
  )
})
