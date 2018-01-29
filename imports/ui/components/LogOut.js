import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { logOut } from './../actions/auth';
import { connect } from 'react-redux';
class LogOut extends Component{

  constructor(props){
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    Meteor.logout();
    this.props.logOut();
  }

  render(){
    return(
      <a onClick={(e) => this.handleLogOut()}>Log Out</a>
    );
  }
}

export default connect(null, { logOut })(LogOut);