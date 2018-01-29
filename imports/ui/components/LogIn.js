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
      <div className='box-view'>
        <div className='box-view__box'>
          <h3 className='box-view__title '>Log In</h3>
          <form onSubmit={(e) => this.handleSubmit(e)} noValidate className='box-view__form '>
            <div className='field'>
              <input type="email" id="email" value={email} placeholder="email" onChange={(e) => { this._handleEmailInput(e.target.value) }} />
            </div>
            <div className='field'>
              <input type="password" id="password" value={password} placeholder="password" onChange={(e) => { this._handlePaswordInput(e.target.value) }} />
            </div>
              <button type="submit">Submit</button>
              {error && <Error message={error} />}
            </form>
          <Link to="/signup">Register</Link>
        </div>
      </div>
    );
  }
}

export default connect(null, { logIn })(LogIn);