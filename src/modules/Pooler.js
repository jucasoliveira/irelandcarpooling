// modules/Pooler.js
import React, { Component } from 'react';
import logo from '../../images/carpoolinglogo.png';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';


class Pooler extends Component{

    constructor(props){
      super(props);
      this.state={
        origin:"",
        destination:""
      };

    }

    myfunction =(event)=>{
      //this.setState({value: event.target.value});
      alert(this.state.origin);
      alert(this.state.destination);
    }

    myfunctionOrigin =(event)=>{
      this.setState({origin: event.target.value});
    }
    myfunctionDestination =(event)=>{
      this.setState({destination: event.target.value});
    }

    render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Please define where you want to go</h2>
        </div>
        <div>

        <form onSubmit={this.myfunction}>

        <label>
            Origin:
            <TextField hintText="Define your origin"
              floatingLabelText="Where are you?"
              type="text" name="origin"
              value={this.state.origin}
              onChange={this.myfunctionOrigin}/>
        </label>

        <p/>

        <label>
          Destination:
          <TextField hintText="Define your destination"
            floatingLabelText="Where you're going?"
            type="text" name="destination"
            value={this.state.destination}
            onChange={this.myfunctionDestination}/>
        </label>

          <FlatButton type="submit" label="OK" />
        </form>

       </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Pooler;
