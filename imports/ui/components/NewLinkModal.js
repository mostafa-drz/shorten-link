import React, { Component } from 'react';
import NewLinkForm from './NewLinkFrom';
import Modal from 'react-modal';

class NewLinkModal extends Component{

  componentWillMount(){
    Modal.setAppElement('body');
  }

  render(){
    const { isOpen, label, onCloseModal } = this.props;
    return(
      <Modal
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        contentLabel={label}
        >
        <NewLinkForm/>
      </Modal>
    );
  }
}

export default NewLinkModal;