import React from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { MODAL } from './../../Helpers/Const/ActionType';

const ModalApp = () => {
  const titulo = useSelector((state) => state.modalReducer.titulo);
  const descricao = useSelector((state) => state.modalReducer.descricao);
  const exibir = useSelector((state) => state.modalReducer.exibir);
  const funcao = useSelector((state) => state.modalReducer.funcao);

  const dispatch = useDispatch()

  const handleCancelar = () => {
    dispatch({
      type: MODAL.FECHAR,
      payload: true
  })
  };

  return (
    <>
      {exibir ? (
        <div style={{width: "80%", marginLeft: "35%", marginTop: "10%", position: "absolute"}}>
          <Modal.Dialog style={{ position: "absolute", zIndex: 10, width: "80%" }}>
            <Modal.Header>
              <Modal.Title>{titulo}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>{descricao}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleCancelar()}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={() => funcao()}>
                Ok
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      ) : null}
    </>
  );
};

export default ModalApp;
