import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {
  HashRouter,
  Route
} from 'react-router-dom';
import Driver from './modules/Driver';
import Pooler from './modules/Pooler';

ReactDOM.render(
  (<HashRouter>
    <div>
        <Route exact path="/" component={App}/>
        <Route path="/pooler" component={Pooler}/>
        <Route path="/driver" component={Driver}/>
    </div>
  </ HashRouter>),
  document.getElementById('root')
);
