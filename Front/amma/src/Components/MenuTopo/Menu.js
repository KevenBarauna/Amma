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
                    <Link to={rota.home}>
                        <img src={imagemLogo} alt='Perfil' style={{ height: '30px', cursor: 'pointer' }} />
                    </Link>
                </Col>
                <Col className='Menu-itens'><Link to={rota.dashboard}>Dashboard</Link></Col>
                <Col className='Menu-itens'><Link to={rota.Sugestões}>Sugestões</Link></Col>
                <Col className='Menu-itens'><Link to={rota.Sobre}>Sobre</Link></Col>
                <Col className='Menu-itens'><Link to={rota.Avisos}>Avisos</Link></Col>
                <Col className='Menu-itens'><Link to={rota.Adm}>Adm</Link></Col>
                <Col className='Menu-itens'><Link to={rota.login}>Login</Link></Col>
                <Col className='Menu-itens'>{null}</Col>
            </Row>
        </div>
    );
}

export default Menu;