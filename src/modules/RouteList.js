// modules/HeaderComponent.js
import React, { Component } from 'react';

import Listing from './List';


class RouteList extends Component{
  constructor(props: any) {
    super(props);
    this.state={
      listType : '/drivers'
    };
  }

    render() {
    return (
      <Listing databaseType={this.state.listType}/>
    );
  }
}

export default RouteList;
