import React from 'react';
import { Col, Row } from 'react-bootstrap';
import imagemNotificacao from './../../assets/image/sino.png';
import './TopFivePerfil.css';
import ListTopFive from './ListTopFive';
import { TOP_TICKET_PERFIL } from './../../Helpers/Const/ConstMock';



const TopoFivePerfil = () => {
    return (
        <Col className='TopFivePerfil-container'>
            <Row>
                <div className='TopFivePerfil-titulo-notificacao'>
                    Segestões
               </div>
                <div className='TopFivePerfil-div-notificacao'>
                    <img src={imagemNotificacao} className='TopFivePerfil-notificacao' />
                </div>
            </Row>
            <div className='TopFivePerfil-container-list'>
                {TOP_TICKET_PERFIL?.map((dados) => (
                    <ListTopFive
                        tipoTicket={dados.tipoTicket}
                        titulo={dados.titulo}
                        data={dados.data}
                    />
                ))}
            </div>
        </Col>
    );
}

export default TopoFivePerfil;