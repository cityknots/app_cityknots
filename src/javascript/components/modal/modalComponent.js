import React from 'react';
import Modal from 'boron/DropModal'
// var Modal = require('boron/DropModal');

var ModalComponent = React.createClass({
    showModal: function(){
        this.refs.modal.show();
    },
    hideModal: function(){
        this.refs.modal.hide();
    },
    render: function() {
        return (
            <div>
                
                <Modal ref="modal">
                    <h2>Im a dialog</h2>
                    <button onClick={this.hideModal}>Close</button>
                </Modal>
            </div>
        );
    }
});

// <button onClick={this.showModal}>Open</button>

export default ModalComponent;