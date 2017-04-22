// modules/Driver.js
import React, { Component } from 'react';
import logo from '../../images/carpoolinglogo.png';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';




class Driver extends Component{
    render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Inform the suffs bellow</h2>
        </div>
        <div>
        <form>
          <TextField
            hintText="Define your origin"
            floatingLabelText="Where are you?"
          />
          <p/>
          <TextField
            hintText="Define your detination"
            floatingLabelText="Where you're going?"
          />
          <p/>
          <DatePicker/>
          <p/>
          <FlatButton label="GO!" fullWidth={true} />
        </form>
       </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Driver;
