import React, { Component } from 'react';
import firebase from '../backend/Firebase';
import Header from './HeaderComponent';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Get a reference to the database service
var database = firebase.database();
var UCRef = database.ref("/drivers");

const cardStyle = {
  margin:20,
  marginRight:50,
  textAlign: 'left',
  align: 'center',
  padding: '20px',
};

const buttonStyle ={
  marginLeft : 20,
}

class List extends Component {
  constructor(props){
  super(props);
  this.state={
    name:[],
    open: false,
    }
  };

  componentDidMount = () => {
    UCRef.on('value', snapshot => {
      this.setState({name: snapshot.val()});
    });
  };

  render() {
    //var listItems = this.state.name;
    let dataWithKeys = Object.keys(this.state.name).map((key) => {
       var obj = this.state.name[key];
       obj._key = key;
       return obj;
    });

    const listItems = dataWithKeys.map((list) =>
      <MuiThemeProvider>
        <Card style={cardStyle}>
          <CardHeader
            title={list.name}
            avatar="../../images/jsa-128.jpeg"
          />
          <CardText>
            <CardTitle title="Origin" subtitle={list.origin} />
            <CardTitle title="Destination" subtitle={list.destination} />
          </CardText>
          <CardActions>
            <RaisedButton label="Contact!" style={buttonStyle}/>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    )
    console.log(dataWithKeys);

    return (
      <div className="App">
        <Header/>
        <div>
          <h1>Drivers List</h1>
          <ul role="nav">
          {listItems}
          </ul>
       </div>
      </div>
    );
  }
}

export default List;
