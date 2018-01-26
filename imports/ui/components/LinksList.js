import React, { Component } from 'react';
import Link from './Link';
import { connect } from 'react-redux';
class LinksList extends Component{
  render(){
    return(
      <div>
        <ul>
         { this.props.links.map((link)=>(<Link key={link._id} url={link.url} />))}
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

export default connect(mapStateToProps)(LinksList);