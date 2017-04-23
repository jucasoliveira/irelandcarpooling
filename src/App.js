import React, { Component } from 'react';
import logo from '../images/logo.svg';
import driverimage from '../images/schools.svg';
import poolerimage from '../images/hailo.png';
import './styles/App.css';
//import Login from './modules/login';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to IrelandPooling</h2>
        </div>
        <div>
          <h1>Please define who are you :)</h1>
          <ul role="nav">
            <Link to="/driver"><img src={driverimage} alt="logo" height="80" width="94" align="center"/></Link>
            <Link to="/pooler"><img src={poolerimage} alt="logo" height="80" width="58" align="center"/></Link>
          </ul>
       </div>
      </div>
    );
  }
}

export default App;
