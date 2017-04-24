// modules/Driver.js
import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import FormComponent from './FormComponent';
import Header from './HeaderComponent';
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
        <Header/>
        <h2>Driver</h2>
        <div>
        <FormComponent/>
       </div>
      </div>
    );
  }
}

export default Driver;
