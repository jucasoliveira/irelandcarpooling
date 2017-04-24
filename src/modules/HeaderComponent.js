// modules/HeaderComponent.js
import React, { Component } from 'react';
import logo from '../../images/logo.svg';


var page = "Ireland Carpooling";

class HeaderComponent extends Component{

    render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{page}</h2>
      </div>
    );
  }
}

export default HeaderComponent;
