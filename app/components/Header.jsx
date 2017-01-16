import React, { Component } from 'react'
import Login from './Login'
import Search from './Search'
import { Link } from 'react-router'

// EI: this can be a dumb component
export default class Header extends Component {
  render(){
    return (
      <nav className="row navbar navbar-default">
          <div className="navbar-header">
            <img id="logo" src='/images/logo.png' />
            <span className="store-name">The Record Store</span>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav" id="blue">
              <li><Link to="/">Home</Link></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <Search />
            <Login />
          </div>
      </nav>
      )
  }

}
