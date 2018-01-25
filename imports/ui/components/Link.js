import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
 
class Link extends Component{
  constructor(props){
    super(props);
    this.handleLogOut=this.handleLogOut.bind(this);
  }

  handleLogOut(){
    Meteor.logout();
    this.props.history.push('/');
  }
  render(){
  return(
    <div>
      <p>Helloo from Link</p>
      <button onClick={this.handleLogOut}>Log Out</button>
    </div>
  );
}
}

export default Link;