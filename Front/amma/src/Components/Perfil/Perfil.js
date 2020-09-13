import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Perfil.css';
import imagemTemp from './../../assets/image/temp2.png';
import imagemMenu from './../../assets/image/menu-icone.svg';


const Perfil = () => {

    return (
        <Row>
            <Col sm={2} className='perfil-coluna-principal'>
                <input type='checkbox' id='chec' className='perfilT-checkbox' />
                <label for='chec' className='perfilT-label'>
                    <img src={imagemMenu} alt='Perfil' style={{ height: '30px', cursor: 'pointer' }} />
                </label>
                <Col id='perfil-teste' className='perfil-coluna-sub-principal'>
                    <div className='perfil-container'>
                        <div className='perfil-imagem-jogador'>
                            <img className='perfil-imagem' src={imagemTemp} alt='Menu' />
                        </div>
                        <div className='perfil-nome'>
                            Keven Baraúna
                     </div>
                        <div className='perfil-cargo'>
                            Coder II
                     </div>
                    </div>
                </Col>

            </Col>
        </Row >
    );
}

export default Perfil;