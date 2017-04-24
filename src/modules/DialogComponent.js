// modules/HeaderComponent.js
import React, { Component } from 'react';


class HeaderComponent extends Component{

    constructor(props: any) {
      super(props);
      this.state={
        open: false,
      }
      this.props.handleOpen = this.handleOpen.bind(this);
    }

    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };

    render() {
      const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          title="Information Updated"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Thank you , soon enought you will recieve a notification regarding your trip.
        </Dialog>
      </div>
    );
  }
}

export default HeaderComponent;
