import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className='not-found'>
      <div className="not-found__container">
        <h3 className='not-found__header'>404</h3>
        <p className='not-found__description'>Page Not Found</p>
        <Link to="/" className='button'>Back To Home</Link>
      </div>
    </div>

  );
}

export default NotFound;