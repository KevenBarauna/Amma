import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import {mensagemFlash} from './../../Helpers/FuncaoPadrao/Index';
import './CriarConta.css';
import usuarioAction from './../../Actions/UsuarioAction';
import { useHistory } from "react-router-dom";


const CriarConta = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const usuarioLogado = useSelector((state) => state.usuarioReducer.usuario);

    const [usuario, setUsuario] = useState('');
    const [cargo, setCargo] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirme, setSenhaConfirme] = useState('');


    function onsubmit() {
        senha !== senhaConfirme
            ? mensagemFlash('error','Senhas diferentes',null,null)
            : dispatch(usuarioAction.adicionarUsuario({ nome: usuario, cargo: cargo, senha: senha, }));
        if (usuarioLogado !== null) history.push("/Amma");
    }

    return (
        <div className='criarConta-fundo'>
            <div className='criarConta-container-transparente'/>
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
                            placeholder="Digite uma senha"
                            onChange={e => setSenha(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirmação de senha</Form.Label>
                        <Form.Control
                            type="password"
                            autoComplete="false"
                            placeholder="Digite uma senha novamente"
                            onChange={e => setSenhaConfirme(e.target.value)}
                        />
                    </Form.Group>

                    <div className='criarConta-button'>
                        <Button variant="danger" className='btn-padrao' onClick={() => onsubmit()}>
                            Criar conta
                </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default CriarConta;