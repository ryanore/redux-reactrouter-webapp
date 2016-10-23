import React, { Component, PropTypes } from 'react'
import Header from './app-header'
import Footer from './app-footer'
import Home from './page-home'

export default (props) => {
  return(
    <div className="app-container">
      <Header />
        {props.children !== null
          ? props.children
          : <Home />
        }
      <Footer />
    </div>
  )
}
