// modules/FormComponent.js
import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Toggle from 'material-ui/Toggle';
import firebase from '../backend/Firebase';
import GooglePlaceAutocomplete from 'material-ui-autocomplete-google-places';

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
var database = firebase.database();


class FormComponent extends Component{
    constructor(props: any) {
      //injectTapEventPlugin();
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
        controlledDateReturn:null,
        databaseType : this.props.databaseType,
      }
    }

    onchangeHandler=(e)=>{
      if(e.target.id === "origin"){
        this.initAutoComplete(e.target.id);
        this.setState({origin:e.target.value});
      } else if(e.target.id === "destination"){
        this.initAutoComplete(e.target.id);
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
      var UCRef = database.ref(this.state.databaseType);
      if (this.state.Disabled) {
        payload = {
          'driver' : {
            'name' : 'Brian',
            'origin' : `${this.state.origin}`,
            'destination' : `${this.state.destin}`,
            'date' : `${this.state.controlledDate}`,
            'time' : `${this.state.time}`
          }
        };
        UCRef.push(payload);
      } else {
        payload = {
          'driver' : {
            'name' : 'Brian',
            'origin' : `${this.state.origin}`,
            'destination' : `${this.state.destin}`,
            'date' : `${this.state.controlledDate}`,
            'time' : `${this.state.time}`,
            'dateReturn' : `${this.state.controlledDateReturn}`,
            'timeReturn' : `${this.state.timeReturn}`
          }
        };
        UCRef.push(payload);
      }
      this.setState({
        open: false,
        origin: '',
        destin:'',
        controlledDate:null,
        time:null,
        Toggled:false,
        Disabled:true,
        timeReturn:null,
        controlledDateReturn:null,
      });
    }

    openReturn=()=>{
      this.setState({Toggled: !this.state.Toggled , Disabled : !this.state.Disabled});
      if (!this.state.Disabled) {
        this.setState({controlledDateReturn : null, timeReturn : null})
      }
    }

    initAutoComplete=(event)=>{
      const input = document.getElementById(event)
      const options = {
        componentRestrictions: {country: 'ie'},
        types: ['geocode']
      }
      const geoAutocomplete = new window.google.maps.places.Autocomplete((input), options)
      geoAutocomplete.addListener('place_changed', () => {
        const selectedPlace = geoAutocomplete.getPlace()
        const componentForm = {
          street_number: 'short_name',
          route: 'long_name',
          locality: 'long_name',
          administrative_area_level_1: 'short_name',
          country: 'long_name',
          postal_code: 'short_name'
        }
        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        let selectedSuggest = {}
        for (let addressComponent of selectedPlace.address_components) {
          const addressType = addressComponent.types[0]
          if (componentForm[addressType]) {
            selectedSuggest[addressType] = addressComponent[componentForm[addressType]]
          }
        }
        // input.value = selectedPlace.name // Code injection risk (check doc)
        if(selectedSuggest.locality === undefined){
          input.value = `${selectedSuggest.administrative_area_level_1}, ${selectedSuggest.country}`;
        }else{
          input.value = `${selectedSuggest.locality}, ${selectedSuggest.administrative_area_level_1}`;
        }

        if(event === "origin"){
          this.setState({origin:input.value});
        } else {
          this.setState({destin:input.value});
        }


      })
    }


    render() {
    return (
      <MuiThemeProvider>

        <form onSubmit={this.onSubmitForm}>
          <TextField
            hintText="Define your origin"
            floatingLabelText="Where are you?"
            value={this.state.origin}
            id="origin"
            onChange={this.onchangeHandler}
            placeholder=''
          />
          <p/>
          <TextField
            hintText="Define your destination"
            floatingLabelText="Where you're going?"
            value={this.state.destin}
            id="destination"
            onChange={this.onchangeHandler}
            placeholder=''
          />
          <p/>
          <DatePicker
            hintText="Origin date"
            value={this.state.controlledDate}
            id="date"
            onChange={this.onchangeDateTime}
            autoOk={true}
            disableYearSelection={true}/>
          <TimePicker hintText="Origin time" value={this.state.time} id="time" onChange={this.onchangeTime}/>
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
            <DatePicker hintText="Return date" value={this.state.controlledDateReturn} id="dateReturn" onChange={this.onchangeDateTimeDisabled} disabled={this.state.Disabled}/>
            <TimePicker hintText="Return time" value={this.state.timeReturn} id="timeReturn" onChange={this.onchangeTimeDisabled} disabled={this.state.Disabled}/>
          <p/>
          <RaisedButton label="GO" onTouchTap={this.handleOpen} type="submit"/>
        </form>
      </MuiThemeProvider>
    );
  }
}

export default FormComponent;
