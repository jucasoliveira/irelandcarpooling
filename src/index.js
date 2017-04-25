import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import {
  HashRouter,
  Route
} from 'react-router-dom';
import Driver from './modules/Driver';
import Pooler from './modules/Pooler';
import List from './modules/RouteList';

ReactDOM.render(

  (<HashRouter>
    <div>
        <Route exact path="/" component={App}/>
        <Route path="/pooler" component={Pooler}/>
        <Route path="/driver" component={Driver}/>
        <Route path="/list" component={List}/>
    </div>
  </ HashRouter>),
  document.getElementById('root')
);
