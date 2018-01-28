import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from './../actions/auth';
import LinksList from './LinksList';
import { Links } from '../../api/links';
import NewLink from './NewLink';

class Dashboard extends Component{
  handleLogOut(){
    Meteor.logout();
    this.props.logOut();
    this.props.history.push('/');
  }
  render(){
  return(
    <div>
      <NewLink />
      <LinksList />
      <button onClick={(e) => this.handleLogOut()}>Log Out</button>
    </div>
  );
}
}
function mapStateToProps(state){
  return{
    user: state.auth.user,
  }
}
export default connect(mapStateToProps, { logOut })(Dashboard);