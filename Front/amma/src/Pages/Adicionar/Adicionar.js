import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import './Adicionar.css'
import ModalBody from './ModalBody';
import ticketAction from './../../Actions/TicketAction';


const Adicionar = () => {
    const dispatch = useDispatch();

    const primeiroAcesso = useCallback(() => {
        dispatch(ticketAction.buscarTiposTicket());
    }, [dispatch]);
    useEffect(() => {
        primeiroAcesso();
    }, [primeiroAcesso]);

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