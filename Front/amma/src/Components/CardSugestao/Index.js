import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import usuarioAction from './../../Actions/UsuarioAction'
import './CardSugestao.css';
import imagemTemp from './../../assets/image/temp2.png';
import imagemfavoritoTrue from './../../assets/image/favorito-true.png';
import imagemfavoritoFalse from './../../assets/image/favorito-false.png';

const CardSugestao = (props) => {
    const dispatch = useDispatch();
    const {
        usuario,
        ticket,
    } = props

    const ticketsFavoritos = useSelector(
        state => state.usuarioReducer.ticketsFavoritos
    );

    const handleClickFavorito = (idFavorito) => {
        dispatch(usuarioAction.favoritarTicket(usuario,idFavorito));
    }

    return (
        <div className='CardSugestao-row'>
            <Row>
                <div className='CardSugestao-imagem-jogador'>
                    <img className='CardSugestao-imagem' src={usuario?.imagem || imagemTemp} alt='Menu' />
                </div>
                <Col sm={2} lg={2} md={2} xs={2} className='CardSugestao-col-usuario'>
                    <div className='CardSugestao-nomeUsuario'>
                        {usuario?.nome}
                    </div>
                    <div>
                        {usuario?.cargo}
                    </div>
                </Col>
                <Col className='CardSugestao-linha' />
                <Col className='CardSugestao-tocket'>
                    <Row className='CardSugestao-ticket-titulo'>
                        {ticket?.titulo}
                    </Row>
                    <Row>
                        {ticket?.descricao}
                    </Row>
                </Col>
                <Col className='CardSugestao-linha' />
                <Col sm={1} lg={1} md={1} xs={1} className='CardSugestao-ticket-votos'>
                    <Row>
                        <div onClick={() => handleClickFavorito(ticket?.id)}> <img className='CardSugestao-favorito' src={ticketsFavoritos?.indexOf(ticket?.id) !== -1 ? imagemfavoritoTrue : imagemfavoritoFalse} alt='Menu' /></div>
                        <div className='CardSugestao-numero-voto'>{ticket?.votos}</div>
                    </Row>
                </Col>

            </Row>
        </div>
    );
}

export default CardSugestao;