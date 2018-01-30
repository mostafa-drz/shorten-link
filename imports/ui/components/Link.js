import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import CopyToClipBoard from './CopyToClipBoard';
import { connect } from 'react-redux';
import { updateVisible } from '../actions/link';
import moment from 'moment';
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

  renderHideButton(){
    const { _id, visible } = this.props;
    return(
      visible ? <button onClick={() => { this.props.updateVisible({ _id, visible: false }) }} className='button  button--pill'>Hide</button>
              : <button onClick={() => { this.props.updateVisible({ _id, visible: true }) }} className='button  button--pill'>Unhidden</button>
    );
  }
  render(){
    const { url, _id, visible, visitedCount, lastVist } = this.props;
    const { btnText } = this.state;
    const abs_url = Meteor.absoluteUrl(_id);
    return(
        <li className='links__item'>
        <p className='links__item__main'>{url}</p>
        <a target='_blank' href={Meteor.absoluteUrl(_id)} className='links__item__trimmed'>{abs_url}</a>
          {this.state.copy && <CopyToClipBoard text={abs_url} _id={_id} />}
          <div className='links__item__stats'>
          <span><span className='links__item__stats__label'>Last Vist:</span> {moment(lastVist).format('YYYY MMM DD - hh:mm A')}</span> - <span>{visitedCount} visits</span>
          </div>
          <div>
            <button onClick={() =>this._handleCopy()} className='button button--pill'>{btnText}</button>
            {this.renderHideButton()}
          </div>
        </li>
    )
  }
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  visitedCount: PropTypes.number.isRequired,
  lastVist: PropTypes.instanceOf(Date),
  visible: PropTypes.bool.isRequired
}

export default connect(null, { updateVisible })(Link);