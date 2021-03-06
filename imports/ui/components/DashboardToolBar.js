import React, { Component } from 'react';

class DashboardToolBar extends Component {
  state = {
    showAll: true,
    label: 'Show ALL'
  }
  handleVisibleChange(status){
    this.setState({ showAll: status });
    this.props.onShowAllChange(status);
  }
  render(){
    const { showAll, label } =this.state;
    return(
      <div>
        <label style={{color:'#263238', letterSpacing:'0.3rem', verticalAlign: 'baseline'}}>{label}</label>
        <input type='checkbox' 
          checked={showAll} 
          onChange={(e)=>this.handleVisibleChange(e.target.checked)} 
        />
        </div>
    );
  }
}

export default DashboardToolBar;