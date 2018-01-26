import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { logOut } from './../actions/auth';
class Link extends Component{
  constructor(props){
    super(props);
    this.handleLogOut=this.handleLogOut.bind(this);
  }

  handleLogOut(){
    Meteor.logout();
    this.props.logOut();
    this.props.history.push('/');
  }
  render(){
  return(
    <div>
      <p>Helloo from Link</p>
      <button onClick={(e) => this.handleLogOut()}>Log Out</button>
    </div>
  );
}
}
function mapStateToProps(state){
  return{
    user: state.auth.user
  }
}
export default connect(mapStateToProps, { logOut })(Link);