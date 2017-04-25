// modules/HeaderComponent.js
import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

var page = "Ireland Carpooling";

class HeaderComponent extends Component{

    render() {
    return (
      <div className="App-header">
        <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        <h2>{page}</h2>
      </div>
    );
  }
}

export default HeaderComponent;
