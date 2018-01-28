import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { logOut } from './../actions/auth';
import Error from './helpers/Error';
import LinksList from './LinksList';
import { addLinks } from '../actions/link';
import { Links } from '../../api/links';

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.handleLogOut=this.handleLogOut.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.initiate = this.initiate.bind(this);
    this.clearMessages = this.clearMessages.bind(this);
  }

  state= {
    url: '',
    error: false,
    status: false,
  }

  handleLogOut(){
    Meteor.logout();
    this.props.logOut();
    this.props.history.push('/');
  }

  _handleSubmit(e){
    e.preventDefault();
    const { url } = this.state;
    // Links.insert({ url, _user: this.props.user._id }, (error) => {
    //   if(error){
    //     this.setState({error: error.reason});
    //   }else{
    //     this.initiate();
    //     this.setState({ status: 'Done!'});
    //   }
    // });
    Meteor.call('links.insert', url, (error) => {
      if(error){
        this.setState({ error: error.message });
      }else{
        this.initiate();
        this.setState({ status: 'Done!'});
      }
    });
  }

  _handleInputChange(url){
    this.setState({ url });
  }

  initiate(){
    this.setState({
      url: '',
      error: false,
      status: false
    });
  }

  clearMessages(){
    this.setState({
      error: false,
      status: false,
    })
  }

  render(){
    const { error, status, url, links } = this.state;

  return(
    <div>
       { error && <Error message={error}/>}
       { status && <p>{status}</p>}
       <form onSubmit={(e)=>this._handleSubmit(e)}>
        <input type="text" 
          placeholder='URL...' 
          value={url} 
          onChange={(e)=>this._handleInputChange(e.target.value)}
          onFocus={(e)=>{this.clearMessages()}}
        />
        <button type="submit">Shorten</button>
      </form>
      <LinksList links={links} />
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
export default connect(mapStateToProps, { logOut, addLinks })(Dashboard);