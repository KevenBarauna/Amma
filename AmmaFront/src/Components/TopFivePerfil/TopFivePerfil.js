import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import './TopFivePerfil.css';
import ListTopFive from './ListTopFive';
import usuarioAction from './../../Actions/UsuarioAction';



const TopoFivePerfil = () => {
    const dispatch = useDispatch();

    const topSugestoesUsuario = useSelector(
        state => state.usuarioReducer.topSugestoes
    );
    const usuario = useSelector(
        state => state.usuarioReducer.usuario
    );

    const primeiroAcesso = useCallback(() => {
        dispatch(usuarioAction.buscarTopSugestoesUsuario(usuario?.id));
    }, [dispatch,usuario]);
    useEffect(() => {
        primeiroAcesso();
    }, [primeiroAcesso]);

    return (
        <Col className='TopFivePerfil-container'>
            <Row>
                <div className='TopFivePerfil-titulo-notificacao'>
                    Melhores segestões:
               </div>
            </Row>
            <div className='TopFivePerfil-container-list'>
                {topSugestoesUsuario?.map((dados, index) => (
                    <ListTopFive
                        key={index}
                        tipoTicket={dados.idTipo}
                        titulo={dados.titulo}
                        data={dados.data}
                    />
                ))}
            </div>
        </Col>
    );
}

export default TopoFivePerfil;