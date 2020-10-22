import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import './Perfil.css';
import { selecionarImagemAvatar } from './../../Helpers/FuncaoPadrao/ImagemUsuario';
import TopFivePerfil from './../TopFivePerfil/TopFivePerfil';


const Perfil = () => {

    const usuario = useSelector(
        state => state.usuarioReducer.usuario
    );

    const tempAlterarAvatar = () => {
        alert('Abrir página altererar avatar')
    }

    return (
        <>
            {usuario !== null ?
                <Col sm={2} className='perfil-coluna-principal'>
                    <Col className='perfil-coluna-sub-principal'>
                        <div className='perfil-container'>
                            <div className='perfil-imagem-jogador' onClick={() => tempAlterarAvatar()}>
                                <img className='perfil-imagem' src={selecionarImagemAvatar(usuario?.idImagem)} alt='Menu' />
                            </div>
                            <div className='perfil-nome'>
                                {usuario?.nome}
                            </div>
                            <div className='perfil-cargo'>
                                {usuario?.cargo}
                            </div>
                            <div>
                                <TopFivePerfil />
                            </div>
                        </div>
                    </Col>
                </Col>
                : null}
        </>
    );
}

export default Perfil;