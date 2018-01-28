import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

const Link = ({ url, _id }) => {
  return(
      <li>
      <p>{url}</p>
      <a target='blank' href={Meteor.absoluteUrl(_id)}>{Meteor.absoluteUrl(_id)}</a>
      </li>
  )
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
}
export default Link;