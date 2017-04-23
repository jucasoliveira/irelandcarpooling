// modules/Driver.js
import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TimePicker from 'material-ui/TimePicker';
import Toggle from 'material-ui/Toggle';
//import firebase from '../backend/Firebase';

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
    margin: '0 auto',
  },
};

class Driver extends Component{
    constructor(props: any) {
      injectTapEventPlugin();
      super(props);
      this.state={
        open: false,
        origin: '',
        destin:'',
        controlledDate:null,
        time:null,
        Toggled:false,
        Disabled:true,
        timeReturn:null,
        controlledDateReturn:null

      }
    }

    onchangeHandler=(e)=>{
      if(e.target.id === "origin"){
        this.setState({origin:e.target.value});
      } else if(e.target.id === "destination"){
        this.setState({destin:e.target.value});
      }
    }

    onchangeDateTime=(event , date)=>{
        this.setState({controlledDate:date});
    }
    onchangeTime=(event , date)=>{
        this.setState({time:date});
    }

    onchangeDateTimeDisabled=(event , date)=>{
        this.setState({controlledDateReturn:date});
    }
    onchangeTimeDisabled=(event , date)=>{
        this.setState({timeReturn:date});
    }

    onSubmitForm=()=>{
      let payload;
      if (this.state.Disabled) {
        payload = {
          'driver' : {
            'origin' : `${this.state.origin}`,
            'destination' : `${this.state.destin}`,
            'date' : `${this.state.controlledDate}`,
            'time' : `${this.state.time}`
          }
        };
      } else {
        payload = {
          'driver' : {
            'origin' : `${this.state.origin}`,
            'destination' : `${this.state.destin}`,
            'date' : `${this.state.controlledDate}`,
            'time' : `${this.state.time}`,
            'dateReturn' : `${this.state.controlledDateReturn}`,
            'timeReturn' : `${this.state.timeReturn}`
          }
        };
      }
      console.log(payload);
    }

    openReturn=()=>{
      this.setState({Toggled: !this.state.Toggled , Disabled : !this.state.Disabled});
      if (!this.state.Disabled) {
        this.setState({controlledDateReturn : null, timeReturn : null})
      }
    }


    render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Show where you are going for everyone</h2>
        </div>
        <div>
        <form onSubmit={this.onSubmitForm}>
          <TextField
            hintText="Define your origin"
            floatingLabelText="Where are you?"
            value={this.state.origin}
            id="origin"
            onChange={this.onchangeHandler}
          />
          <p/>
          <TextField
            hintText="Define your destination"
            floatingLabelText="Where you're going?"
            value={this.state.destin}
            id="destination"
            onChange={this.onchangeHandler}
          />
          <p/>
          <DatePicker hintText="Origin date" value={this.state.controlledDate} id="date" onChange={this.onchangeDateTime}/>
          <TimePicker hintText="12hr Format" value={this.state.time} id="time" onChange={this.onchangeTime}/>
          <p/>

          <div style={styles.block}>
            <Toggle
              label="Add return trip?"
              style={styles.toggle}
              defaultToggled={this.state.Toggled}
              toggle={this.state.Toggled}
              onToggle={this.openReturn}
            />
            </div>
            <DatePicker hintText="Origin date" value={this.state.controlledDateReturn} id="dateReturn" onChange={this.onchangeDateTimeDisabled} disabled={this.state.Disabled}/>
            <TimePicker hintText="12hr Format" value={this.state.timeReturn} id="timeReturn" onChange={this.onchangeTimeDisabled} disabled={this.state.Disabled}/>
          <p/>
          <FlatButton label="GO!" type="submit"/>
        </form>
       </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Driver;
