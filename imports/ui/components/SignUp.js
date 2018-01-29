import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base'
import Error from './helpers/Error';
import {isEmail} from 'validator';
class SignUp extends Component {

  constructor(props){
    super(props);
    this._handleEmailInput = this._handleEmailInput.bind(this);
    this._handlePaswordInput = this._handlePaswordInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateData = this.validateData.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  state = {
    error: false,
    email: '',
    password: ''
  }

  _handlePaswordInput(password){
    this.setState({ password });
  }

  _handleEmailInput(email){
    this.setState({ email });
  }

  validateData(){
    const { email, password } = this.state;
    if(!isEmail(email)){
      this.setState({ error: 'The email is not in a correct format' });
      return false;
    }
    if(password.length<6){
      this.setState({ error: 'The password length should be greater than 6'});
      return false;
    }
    return true;
  }

  clearErrors(){
    this.setState({error:false});
  }

 handleSubmit(e){
    e.preventDefault();
    if(this.validateData()){
      const { email, password } = this.state;
      Accounts.createUser( { email, password }, (error) => {
        if(error){
          this.setState({ error: error.reason });
        }
        else{
          this.props.history.push('/links');
        }
      });
    }
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <div className='box-view'>
        <div className='box-view__box'>
          <h3 className='box-view__title '>Sign Up</h3>
          <form onSubmit={(e) => this.handleSubmit(e)} noValidate className='box-view__form '>
          <div className="field">
            <input type="email" id="email" value={email} placeholder="email" onChange={(e)=>{this._handleEmailInput(e.target.value)}} onFocus={(e)=>this.clearErrors()} />
          </div>
          <div className="field">
            <input type="password" id="password" value={password} placeholder="password" onChange={(e) => { this._handlePaswordInput(e.target.value) }} onFocus={(e) => this.clearErrors()} />
          </div>
          <button type="submit">Submit</button>
          { error && <Error message={error}/> }
        </form>
        <Link to="/">Have An Account?</Link>
      </div>
    </div>
    );
  }
}

export default SignUp;