import React, { Component } from 'react'
import HeaderContainer from '../containers/HeaderContainer'
// import Footer from './footer'

export default (props) => {
  console.log('hit')
  return (
    <div>
      <HeaderContainer />
        {props.children}
    </div>
  )
}
