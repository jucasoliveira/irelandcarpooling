// modules/Driver.js
import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import FormComponent from './FormComponent';

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
    margin: '0 auto',
  },
};

// Get a reference to the database service
/*
var database = firebase.database();
var UCRef = database.ref("/drivers");
*/
class Driver extends Component{
    constructor(props: any) {
      super(props);
    }


    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tell everyone about your trip</h2>
        </div>
        <div>
        <FormComponent/>
       </div>
      </div>
    );
  }
}

export default Driver;
