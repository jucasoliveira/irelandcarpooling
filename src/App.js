import React, { Component } from 'react';
import logo from '../images/logo.svg';
import driverimage from '../images/schools.svg';
import poolerimage from '../images/hailo.png';
import './styles/App.css';
//import Login from './modules/login';
import { Link } from 'react-router-dom';
import Header from './modules/HeaderComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <div>
          <h1>Please define who are you :)</h1>
          <ul role="nav">
            <Link to="/driver"><img src={driverimage} alt="logo" height="80" width="94" align="center"/></Link>
            <Link to="/pooler"><img src={poolerimage} alt="logo" height="80" width="58" align="center"/></Link>
            <p/>
            <Link to="/list">Drivers List</Link>
          </ul>
       </div>
      </div>
    );
  }
}

export default App;
