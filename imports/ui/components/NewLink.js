import React, { Component } from 'react';
import NewLinkModal from './NewLinkModal';

class NewLink extends Component{

  constructor(props){
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  state = {
    newModalOpen: false,
    label: 'Add New Link'
  }

  closeModal(){
    this.setState({newModalOpen:false});
  }

  openModal(){
    this.setState({newModalOpen:true});
  }
  render(){
    const { newModalOpen, label } = this.state;
    return(
      <div>
        <button className='button button--add-link' onClick={() => this.openModal()}>+ Add New Link</button>
        <NewLinkModal 
        isOpen={newModalOpen}
        label={label}
        onCloseModal={this.closeModal}
        />
      </div>
    );
  }
}

export default NewLink;