// modules/Pooler.js
import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import FormComponent from './FormComponent';
import Header from './HeaderComponent';

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
          <Header/>
          <h2>Passenger</h2>
        <div>
       </div>
      </div>
    );
  }
}

export default Pooler;
