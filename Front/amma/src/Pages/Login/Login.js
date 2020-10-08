import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import imagemLogo from './../../assets/image/logo.png'
import './Login.css';
import usuarioAction from './../../Actions/UsuarioAction';
import rota from './../../Helpers/Const/Links';
import { Link } from 'react-router-dom';


const Login = () => {
    const dispatch = useDispatch();

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');


    function onsubmit() {
        dispatch(usuarioAction.verificarLogin());
        console.log('$ usuário: ', usuario)
        console.log('$ senha: ', senha)

    }

    return (
        <div className='login-fundo'>
            <div>
                <div className='login-container'>
                    <Form>
                        <div className='login-logo'>
                            <img src={imagemLogo} alt='Imagem logo' id='login-imagem-logo'></img>
                        </div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Usuário de rede"
                                onChange={e => setUsuario(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Senha"
                                onChange={e => setSenha(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className='login-criar-conta'>
                            <Link to={rota.novaConta}>
                                <Form.Label className='login-criar-conta'>Criar conta</Form.Label>
                            </Link>
                        </Form.Group>

                        <div className='login-button'>
                            <Button variant="primary" className='btn-padrao' onClick={() => onsubmit()}>
                                Entrar
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;