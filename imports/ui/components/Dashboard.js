import React from 'react';
import LinksList from './LinksList';
import NewLink from './NewLink';
import LogOut from './LogOut';

const Dashboard = () => {
  return(
    <div>
      <NewLink/>
      <LinksList/>
      <LogOut/>
    </div>
  );
}
export default Dashboard;