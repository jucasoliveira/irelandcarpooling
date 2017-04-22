// modules/Driver.js
import React, { Component } from 'react';
import logo from '../../images/carpoolinglogo.png';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TimePicker from 'material-ui/TimePicker';



class Driver extends Component{
    constructor(props: any) {
      injectTapEventPlugin();
      super(props);
      this.state={
        open: false,
        origin: '',
        destin:'',
        date:'',
        time:'',
      }
    }

    onchangeHandler=(e)=>{
      if(e.target.id == "origin"){
        this.setState({origin:e.target.value});
      } else if(e.target.id == "destination"){
        this.setState({destin:e.target.value});
      } else if(e.target.id == "date"){
        this.setState({date:e.target.value});
      } else if(e.target.id == "time"){
        this.setState({time:e.target.value});
      }
    }

    onSubmitForm=()=>{
      console.log("Full info origin: " +this.state.origin+ " destination: "+this.state.destin+" date: "+this.state.date+" time: "+this.state.time);
    }


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
            value={this.state.origin}
            id="origin"
            onChange={this.onchangeHandler}
          />
          <p/>
          <TextField
            hintText="Define your detination"
            floatingLabelText="Where you're going?"
            value={this.state.destin}
            id="destination"
            onChange={this.onchangeHandler}
          />
          <p/>
          <DatePicker hintText="Origin date" / ><TimePicker hintText="12hr Format"/>
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
