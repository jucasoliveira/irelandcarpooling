// modules/Pooler.js
import React, { Component } from 'react';
import logo from '../../images/carpoolinglogo.png';


class Pooler extends Component{

    constructor(props){
      super(props);
      this.state={
        value:""
      };

    }

    myfunction =(event)=>{
      //this.setState({value: event.target.value});
      alert(this.state.value);
    }

    myfunctionInput =(event)=>{
      this.setState({value: event.target.value});
    }

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Please define where you want to go</h2>
        </div>
        <div>

        <form onSubmit={this.myfunction}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.value} onChange={this.myfunctionInput}/>
          </label>
          <input type="submit" value="OK"  />
        </form>

       </div>
      </div>
    );
  }
}

export default Pooler;
