import React from 'react';
import { Col } from 'react-bootstrap';
import './Perfil.css';
import imagemTemp from './../../assets/image/temp2.png';
import TopFivePerfil from './../TopFivePerfil/TopFivePerfil';


const Perfil = () => {

    return (
        <Col sm={2} className='perfil-coluna-principal'>
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
                    <div>
                        <TopFivePerfil />
                    </div>
                </div>
            </Col>
        </Col>
    );
}

export default Perfil;