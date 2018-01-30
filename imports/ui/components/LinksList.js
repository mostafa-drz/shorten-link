import React, { Component } from 'react';
import Link from './Link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DashboardToolBar from './DashboardToolBar';
import FlipMove from 'react-flip-move';
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
          <FlipMove duration={500} easing="ease-out">
            {this.props.links.map((link) => ((link.visible || showAll) && <Link key={link._id} {...link} />))}
          </FlipMove>
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