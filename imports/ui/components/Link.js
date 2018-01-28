import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import CopyToClipBoard from './CopyToClipBoard';

class Link extends Component{

  constructor(props){
    super(props);
    this._handleCopy = this._handleCopy.bind(this);
  }

  state = {
    copy: false,
    btnText: 'copy'
  }

  _handleCopy(){
    this.setState({ copy: true, btnText: 'copied' });
    setTimeout(() => {
      this.setState({ copy: false, btnText: 'copy' });
    }, 1000);
  }

  render(){
    const { url, _id } = this.props;
    const { btnText } = this.state;
    const abs_url = Meteor.absoluteUrl(_id);
    return(
        <li>
        <p>{url}</p>
        <a target='blank' href={Meteor.absoluteUrl(_id)}>{abs_url}</a>
        {this.state.copy && <CopyToClipBoard text={abs_url} _id={_id} />}
        <button onClick={() =>this._handleCopy()}>{btnText}</button>
        </li>
    )
  }
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
}
export default Link;