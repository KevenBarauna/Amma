import React from 'react';
import { Modal } from 'react-bootstrap';
import './Adicionar.css'
import ModalBody from './ModalBody';

const Adicionar = () => {

    return (
        <div className='modal-adicionar-container'>
            <div className='modal-adicionar-transparent'>
                <Modal.Dialog size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Adicionar</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <ModalBody />
                    </Modal.Body>

                    <Modal.Footer>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
    );
}

export default Adicionar;