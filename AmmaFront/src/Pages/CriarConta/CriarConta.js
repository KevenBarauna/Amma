import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { exibirMensagemErro } from "./../../Helpers/FuncaoPadrao/Index";
import "./CriarConta.css";
import usuarioAction from "./../../Actions/UsuarioAction";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { selecionarImagemAvatar } from "./../../Helpers/FuncaoPadrao/ImagemUsuario";

const CriarConta = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const usuarioLogado = useSelector((state) => state.usuarioReducer.usuario);

  const [usuario, setUsuario] = useState("");
  const [cargo, setCargo] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirme, setSenhaConfirme] = useState("");
  const [email, setEmail] = useState("");

  const primeiroAcesso = useCallback(() => {
    if (usuarioLogado !== null) history.push("/Amma");
  }, [usuarioLogado, history]);
  useEffect(() => {
    primeiroAcesso();
  }, [primeiroAcesso]);

  function validar() {
    let msgErro = null;
    if (usuario === "") {
      msgErro = "Informe o nome de usuário";
    } else if (senha === "") {
      msgErro = "Informe seu senha";
    } else if (senhaConfirme === "") {
      msgErro = "Informe a confirmação de senha";
    } else if (email === "") {
      msgErro = "Informe seu email";
    } else if (cargo === "") {
      msgErro = "Informe seu cargo atual";
    } else if (senhaConfirme !== senha) {
      msgErro = "Senhas diferentes";
    }

    if (msgErro !== null) {
      exibirMensagemErro(msgErro);
      return false;
    } else {
      return true;
    }
  }

  function onsubmit() {
    if (validar()) {
      dispatch(
        usuarioAction.adicionarUsuario({
          nome: usuario,
          cargo: cargo,
          senha: senha,
          email: email,
        })
      );
    }
  }

  return (
    <div className="criarConta-fundo">
      <div className="criarConta-container">
        <div className="criarConta-imagem-jogador">
          <img
            className="criarConta-imagem"
            src={selecionarImagemAvatar(1)}
            alt="Avatar"
          />
        </div>
          <div className="criarConta-container-textField">
            <TextField
              id="outlined-basic"
              className="criarConta-textField"
              type="text"
              label="Nome"
              variant="outlined"
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="criarConta-container-textField">
            <TextField
              id="outlined-basic"
              className="criarConta-textField"
              type="password"
              label="Senha"
              variant="outlined"
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="criarConta-container-textField">
            <TextField
              id="outlined-basic"
              className="criarConta-textField"
              type="password"
              label="Confirmação de Senha"
              variant="outlined"
              onChange={(e) => setSenhaConfirme(e.target.value)}
            />
          </div>
          <div className="criarConta-container-textField">
            <TextField
              id="outlined-basic"
              className="criarConta-textField"
              type="email"
              label="E-mail"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="criarConta-container-textField">
            <TextField
              id="outlined-basic"
              className="criarConta-textField"
              type="text"
              label="Cargo"
              variant="outlined"
              onChange={(e) => setCargo(e.target.value)}
            />
          </div>

          <div className="criarConta-button">
            <Button variant="contained" onClick={() => onsubmit()}>
              Criar conta
            </Button>
          </div>
      </div>
    </div>
  );
};

export default CriarConta;
