import React from 'react';
import LinksList from './LinksList';
import NewLink from './NewLink';
import LogOut from './LogOut';

const Dashboard = () => {
  return(
    <div className='dashboard'>
      <NewLink/>
      <LinksList className='links'/>
    </div>
  );
}
export default Dashboard;