import React, { Component } from 'react';
import Link from './Link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class LinksList extends Component{
  render(){
    return(
      <div>
        <ul>
         { this.props.links.map((link)=>(<Link key={link._id} url={link.url} _id={link._id} />))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    links: state.links
  };
}

LinksList.propTypes = {
  links: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(LinksList);