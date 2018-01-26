import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import Error from './helpers/Error';
import { logIn } from '../actions/auth';
import { connect } from 'react-redux';
class LogIn extends Component {

  constructor(props) {
    super(props);
    this._handleEmailInput = this._handleEmailInput.bind(this);
    this._handlePaswordInput = this._handlePaswordInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    error: false,
    email: '',
    password: ''
  }

  _handlePaswordInput(password) {
    this.setState({ password });
  }

  _handleEmailInput(email) {
    this.setState({ email });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    Meteor.loginWithPassword({ email }, password, (error) => {
      if(error){
        this.setState({ error: error.reason });
      }else{
        this.props.logIn({ user: Meteor.user() })
        this.props.history.push('/links');
      }
    });
    
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)} noValidate>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} placeholder="email" onChange={(e) => { this._handleEmailInput(e.target.value) }}/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} placeholder="password" onChange={(e) => { this._handlePaswordInput(e.target.value) }} />
          <button type="submit">Submit</button>
          {error && <Error message={error} />}
        </form>
        <Link to="/signup">Register</Link>
      </div>
    );
  }
}

export default connect(null, { logIn })(LogIn);