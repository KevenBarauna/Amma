import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import imagemLogo from './../../assets/image/logoAmma.png'
import './Login.css';
import usuarioAction from './../../Actions/UsuarioAction';
import rota from './../../Helpers/Const/Links';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const usuarioLogado = useSelector(
        state => state.usuarioReducer.usuario
    );

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const alterarTela = () => {
        history.push('/Amma');
    }

    function onsubmit() {
        dispatch(usuarioAction.verificarLogin({nome: usuario, senha: senha}));
        console.log('$ usuário: ', usuario)
        console.log('$ senha: ', senha)
        alterarTela();
    }



    return (
        <>
            {usuarioLogado === null ?
                <div className='login-fundo'>
                    <div className='login-container-transparente' />
                    <div>
                        <div className='login-container-form'>
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
                                    <Button variant="danger" className='btn-padrao' onClick={() => onsubmit()}>
                                        Entrar
                            </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
                : alterarTela()}
        </>
    );
}

export default Login;