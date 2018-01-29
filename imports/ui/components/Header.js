import React from 'react';
import { connect } from 'react-redux';
import GuestHeader from './GuestHeader';
import UserHeader from './UserHeader';

const Header = ({ user }) => {
  return(
    user ? <UserHeader/>
                    : <GuestHeader/>
  );
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(Header);