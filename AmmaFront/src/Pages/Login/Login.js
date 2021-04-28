import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import imagemLogo from "./../../assets/image/logo.png";
import "./Login.css";
import usuarioAction from "./../../Actions/UsuarioAction";
import rota from "./../../Helpers/Const/Links";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const usuarioLogado = useSelector((state) => state.usuarioReducer.usuario);

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const alterarTela = () => {
    if (usuarioLogado !== null) history.push("/Amma");
  };

  function onsubmit() {
    dispatch(usuarioAction.verificarLogin({ nome: usuario, senha: senha }));
    alterarTela();
  }

  return (
    <>
      {usuarioLogado === null ? (
        <div className="login-fundo">
          <div className="login-container-form">
            <Form>
              <div className="login-logo">
                <img
                  src={imagemLogo}
                  alt="Imagem logo"
                  id="login-imagem-logo"
                ></img>
              </div>
              <div className="login-container-textField">
                <TextField
                  id="outlined-basic"
                  className="login-textField"
                  type="text"
                  label="Nome"
                  variant="outlined"
                  onChange={(e) => setUsuario(e.target.value)}
                />
              </div>
              <div className="login-container-textField">
                <TextField
                  id="outlined-basic"
                  className="login-textField"
                  type="password"
                  label="Senha"
                  variant="outlined"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              <div className="login-container-criar-conta">
                <Link to={rota.novaConta}>
                  <Form.Label className="login-criar-conta">
                    Criar conta
                  </Form.Label>
                </Link>
              </div>

              <div className="login-button">
                <Button
                  variant="contained"
                  onClick={() => onsubmit()}
                >
                  Entrar
                </Button>
              </div>
            </Form>
          </div>
        </div>
      ) : (
        alterarTela()
      )}
    </>
  );
};

export default Login;
