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
                <Modal.Dialog size="xl">
                    <Modal.Header closeButton>
                        <Modal.Title>Adicionar novo item</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <ModalBody />
                    </Modal.Body>

                    <Modal.Footer>
                        Atenção: não é possível editar o ticket depois de salvar.
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
    );
}

export default Adicionar;