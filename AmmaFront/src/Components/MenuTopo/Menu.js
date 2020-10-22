import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menu.css'
import rota from './../../Helpers/Const/Links'
import imagemLogo from './../../assets/image/logo.png';

const Menu = () => {

    return (
        <div className='Menu-container'>
            <Row className='Menu-row'>
                <Col className='Menu-itens'>
                    <Link to={rota.inicio}>
                        <img src={imagemLogo} alt='Logo' style={{ height: '30px', cursor: 'pointer' }} />
                    </Link>
                </Col>
                <Col className='Menu-itens'><Link to={rota.inicio}>Início</Link></Col>
                <Col className='Menu-itens'><Link to={rota.Sugestões}>Sugestões</Link></Col>
                <Col className='Menu-itens'><Link to={rota.Tutorial}>Tutorial</Link></Col>
                <Col className='Menu-itens'><Link to={rota.Gerenciar}>Gerenciar</Link></Col>
                <Col className='Menu-itens'><Link to={rota.login}>Login</Link></Col>
                <Col className='Menu-itens'>{null}</Col>
                <Col className='Menu-itens'>{null}</Col>
            </Row>
        </div>
    );
}

export default Menu;