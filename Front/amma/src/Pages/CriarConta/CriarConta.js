import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import './CriarConta.css';
import usuarioAction from './../../Actions/UsuarioAction';


const CriarConta = () => {
    const dispatch = useDispatch();

    const [usuario, setUsuario] = useState('');
    const [cargo, setCargo] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirme, setSenhaConfirme] = useState('');


    function onsubmit() {
        senha !== senhaConfirme
            ? alert('Senhas diferentes')
            : dispatch(usuarioAction.adicionarUsuario({ nome: usuario, cargo: cargo, senha: senha, }));
    }

    return (
        <div className='criarConta-container'>
            <div className='criarConta-titulo'>Criar nova conta</div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Usuário de rede"
                        onChange={e => setUsuario(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Cargo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Cargo atual"
                        onChange={e => setCargo(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        autoComplete="false"
                        placeholder="Senha"
                        onChange={e => setSenha(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirmação de senha</Form.Label>
                    <Form.Control
                        type="password"
                        autoComplete="false"
                        placeholder="Confirmação de senha"
                        onChange={e => setSenhaConfirme(e.target.value)}
                    />
                </Form.Group>

                <div className='criarConta-button'>
                    <Button variant="primary" className='btn-padrao' onClick={() => onsubmit()}>
                        Criar conta
                </Button>
                </div>
            </Form>
        </div>
    );
}

export default CriarConta;