import React, { Component } from 'react';
import Login from './Login';
import Search from './Search'

export default class Header extends Component {
  render(){
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header"> <img id="logo" src='/images/logo_inversed.png' /> </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav" id="blue">
              <li> <a href="#"> Home </a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <Search />

            <Login />



          </div>
        </div>
      </nav>
      )
  }

}
