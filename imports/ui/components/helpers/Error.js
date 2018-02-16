import React from 'react';

const Error = ({ message }) => {
  return(
    <div>
      <p style={styles.text}>! {message}</p>
    </div>
  );
} 

const styles = {
  text: {
    color: 'red',
    fontWeight: 400,
    letterSpacing: '3px',
  }
}
export default Error;