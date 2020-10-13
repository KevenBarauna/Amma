import React from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import usuarioAction from './../../Actions/UsuarioAction'
import './CardSugestao.css';
import imagemTemp from './../../assets/image/temp2.png';
import imagemfavoritoTrue from './../../assets/image/favorito-true.png';
import imagemfavoritoFalse from './../../assets/image/favorito-false.png';
import imagemApagar from './../../assets/image/icone-apagar.svg';
import imagemAprovado from './../../assets/image/icone-aprovado.svg';

const CardSugestao = (props) => {
    const dispatch = useDispatch();
    const {
        ticketsFavoritos,
        ticket,
        usuario,
        codRender,
    } = props;

    const handleClickFavorito = (idFavorito) => {
        dispatch(usuarioAction.favoritarTicket(usuario, idFavorito));
    }

    const renderVotos = () => {
        //ID = 1
        return (
            <>
                <div onClick={() => handleClickFavorito(ticket?.id)}> <img className='CardSugestao-favorito' src={ticketsFavoritos?.indexOf(ticket?.id) !== -1 ? imagemfavoritoTrue : imagemfavoritoFalse} alt='Menu' /></div>
                <div className='CardSugestao-numero-voto'>{ticket?.votos}</div>
            </>
        );
    };

    const renderVisualizacao = () => {
        //ID = 2
        return (
            <>
                <div> <img className='CardSugestao-favorito' src={imagemfavoritoFalse} alt='Menu' /></div>
                <div className='CardSugestao-numero-voto'>{0}</div>
            </>
        );
    };

    const renderAdm = () => {
        //ID = 3
        return (
            <>
                <div onClick={() => handleClickFavorito(ticket?.id)}> <img style={{ height: '30px', marginLeft: '4px', cursor: 'pointer' }} src={imagemApagar} alt='Menu' /></div>
                <div onClick={() => handleClickFavorito(ticket?.id)}> <img style={{ height: '30px', marginLeft: '4px', cursor: 'pointer' }} src={imagemAprovado} alt='Menu' /></div>
            </>
        );
    };

    return (
        <>
            <div className='CardSugestao-row'>
                <Row>
                    <Col sm={4} lg={4} md={4} xs={4}>
                        <Row>
                            <div className='CardSugestao-imagem-jogador'>
                                <img className='CardSugestao-imagem' src={ticket?.usuario?.imagem || imagemTemp} alt='Menu' />
                            </div>
                            <Col className='CardSugestao-col-usuario'>
                                <Row>
                                    <div className='CardSugestao-nomeUsuario'>
                                        {ticket?.usuario?.nome}
                                    </div>
                                </Row>
                                <Row>
                                    <div>
                                        {ticket?.usuario?.cargo}
                                    </div>
                                </Row>
                            </Col>
                            <Col className='CardSugestao-linha' />
                        </Row>
                    </Col>

                    <Col>
                        <Col className='CardSugestao-tocket'>
                            <Row className='CardSugestao-ticket-titulo'>
                                {ticket?.titulo}
                            </Row>
                            <Row>
                                {ticket?.descricao}
                            </Row>
                        </Col>
                        <Col className='CardSugestao-linha' />
                    </Col>
                    <Col sm={1} lg={1} md={1} xs={1} className='CardSugestao-ticket-votos'>
                        <Row>
                            {codRender === 1 ? renderVotos() :
                                codRender === 2 ? renderVisualizacao() :
                                    codRender === 3 ? renderAdm() :
                                        null}
                        </Row>
                    </Col>

                </Row>
            </div>
        </>
    );
}

export default CardSugestao;