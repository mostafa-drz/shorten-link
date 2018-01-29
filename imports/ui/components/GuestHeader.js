import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GuestHeader extends Component {
  render(){
    return(
      <nav className='navbar'>
        <ul className='nav'>
          <li className='nav__item  nav__item--brand'><Link to='/'>Trim WWW</Link></li>
          <li className='nav__item'><Link to="/about">About Us</Link></li>
          <li className='nav__item'><Link to="/Contact">Contact Us</Link></li>
          <li className='nav__item nav__item--action'><Link to="/login">Log In</Link></li>
        </ul>
      </nav>
    );
  }
}

export default GuestHeader;