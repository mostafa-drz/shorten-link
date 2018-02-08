import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LogOut from './LogOut';

const UserHeader = () => {
  return(
    <div>
      <nav className='navbar'>
        <ul className='nav'>
          <li className='nav__item  nav__item--brand'><Link to='/'>Trim WWW</Link></li>
          <li className='nav__item nav__item--action'><LogOut/></li>
        </ul>
      </nav>
    </div>
  );
}

export default UserHeader;