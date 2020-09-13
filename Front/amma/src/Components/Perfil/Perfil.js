import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Perfil.css';
import imagemTemp from './../../assets/image/temp2.png';


const Perfil = () => {

    return (
        <Row>
            <Col sm={2} className='perfil-coluna-principal' >
                <div className='perfil-container'>
                    <div className='perfil-imagem-jogador'>
                        <img className='perfil-imagem' src={imagemTemp} />
                    </div>
                    <div className='perfil-nome'>
                        Keven Baraúna
                    </div>
                    <div className='perfil-cargo'>
                        Coder II
                    </div>
                </div>
            </Col>
        </Row >
    );
}

export default Perfil;