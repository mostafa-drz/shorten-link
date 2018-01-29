import React, { Component } from 'react';
import Link from './Link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DashboardToolBar from './DashboardToolBar';

class LinksList extends Component{

  constructor(props){
    super(props);
    this.handleShowChange = this.handleShowChange.bind(this);
  }

  state = {
    showAll: true
  }

  handleShowChange(status){
    this.setState({ showAll: status });
  }

  render(){
    const { showAll } = this.state;
    return(
      <div>
        <DashboardToolBar onShowAllChange={(status) => this.handleShowChange(status)} />
        <ul>
          {this.props.links.map((link) => ((link.visible || showAll) && <Link key={link._id} url={link.url} _id={link._id} visible={link.visible}/>))}
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