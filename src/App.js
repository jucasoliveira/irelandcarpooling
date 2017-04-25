import React, { Component } from 'react';
import logo from '../images/logo.svg';
import driverimage from '../images/car-compact.png';
import poolerimage from '../images/call-taxi.png';
import './styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import Header from './modules/HeaderComponent';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  paddingTop: 15,
  textAlign: 'center',
  display: 'inline-block',
};

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Header/>
        <div>
          <h1>Please define who are you :)</h1>
          <ul role="nav">
          <Paper style={style} zDepth={2} circle={true} >
          <Link to="/driver"><img src={driverimage} alt="logo" /></Link>
          </Paper>
          <Paper style={style} zDepth={2} circle={true} >
          <Link to="/pooler"><img src={poolerimage} alt="logo" align="center"/></Link>
          </Paper>
            <p/>
            <Link to="/list">Drivers List</Link>
          </ul>
       </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
