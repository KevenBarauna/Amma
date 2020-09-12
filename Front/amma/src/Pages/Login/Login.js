import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import imagemLogo from './../../assets/image/logo.png'
import './Login.css';
import usuarioAction from './../../Actions/UsuarioAction';


const Login = () => {
    const dispatch = useDispatch();

    function onsubmit() {
        alert('$ Olhar console')
        dispatch(usuarioAction.buscarTodosUsuarios());
    }

    return (
        <div className='login-fundo'>
            <div>
                <div className='login-container'>
                    <Form>
                        <div className='login-logo'>
                            <img src={imagemLogo} alt='Imagem logo' id='login-imagem-logo'></img>
                            <h2 className='login-titulo'>Amma</h2>
                        </div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Usuário</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Usuário de rede"
                                onChange={(event) => console.log('$ Usuário', event.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Senha"
                                onChange={(event) => console.log('$ Senha', event.target.value)}
                            />
                        </Form.Group>

                        <Form.Text className="text-muted login-criar-conta">
                            Ainda não tem conta?
                    </Form.Text>
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