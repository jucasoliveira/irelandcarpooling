// modules/Pooler.js
import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import FormComponent from './FormComponent';


class Pooler extends Component{

    constructor(props){
      super(props);
      this.state={
        origin:"",
        destination:""
      };

    }

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tell everyone about your trip</h2>
        </div>
        <div>
       </div>
      </div>
    );
  }
}

export default Pooler;
