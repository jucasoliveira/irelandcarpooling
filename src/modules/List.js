import React, { Component } from 'react';
import firebase from '../backend/Firebase';
import Header from './HeaderComponent';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Get a reference to the database service
var database = firebase.database();
const style = {
  height: 50,
  width: 150,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

const cardStyle = {
  margin:20,
  marginRight:50,
  textAlign: 'left',
  align: 'center',
  padding: '20px',
  chip: {
    margin: 10,
  },
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
    databaseType : this.props.databaseType,
    }
  };

  componentDidMount = () => {
    var UCRef = database.ref(this.state.databaseType);
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
    console.log(dataWithKeys);

    const listItems = dataWithKeys.map((list) =>
      <MuiThemeProvider>
        <Card style={cardStyle}>
          <CardHeader
            title={list.name}
            subtitle="The best driver"
            avatar=""
          />
          <CardText>
            <CardTitle title="Origin" subtitle={list.origin} />
            <CardTitle title="Destination" subtitle={list.destination} />
          </CardText>
          <Paper style={style} zDepth={1}>
          <p>{list.date}  {list.time}</p>
          </Paper>
          { list.dateReturn ? (<p>
              <Divider />
              <Chip style={cardStyle.chip}>This ride has returning</Chip>
              <Paper style={style} zDepth={1}>
                <p>{list.dateReturn}  {list.timeReturn}</p>
              </Paper>
            </p>) : (<p/>)}
          <CardActions>
            <RaisedButton label="Contact!" style={buttonStyle}/>
          </CardActions>
        </Card>
      </MuiThemeProvider>
    )

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
