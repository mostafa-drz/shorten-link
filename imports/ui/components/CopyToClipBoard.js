import React, { Component } from 'react';

class CopyToClipBoard extends Component {
  componentDidMount(){
    this.input.select();
    document.execCommand('copy');
  }
  render(){
    const { text, _id } = this.props;
    return(
      <input ref={(input) => {this.input = input}} style={{position: 'absolute', left:100000}} defaultValue={text} />
    );
  }
}

export default CopyToClipBoard;