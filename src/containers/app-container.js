import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import Header from '../components/app-header'
import Footer from '../components/app-footer'

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)( (props) => {

  return(
    <div className="app-container">
      <Header user={props.user} />
      {props.children}
      <Footer role={props.user}/>
    </div>
  )
})
