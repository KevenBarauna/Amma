import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Menu.css";
import rota from "./../../Helpers/Const/Links";
import imagemLogo from "./../../assets/image/logo.png";
import { useDispatch, useSelector } from "react-redux";
import usuarioAction from "./../../Actions/UsuarioAction";
import { selecionarImagemAvatar } from "./../../Helpers/FuncaoPadrao/ImagemUsuario";

const Menu = () => {
  const dispatch = useDispatch();

  const usuarioLogado = useSelector((state) => state.usuarioReducer.usuario);

  const sair = () => {
    dispatch(usuarioAction.sairConta());
  };

  const tempAlterarAvatar = () => {
    alert("Abrir página altererar avatar");
  };

  const renderLoginSair = () => {
    if (usuarioLogado === null) {
      return <></>;
    } else {
      return (
        <Link id="link" to={rota.login} onClick={() => sair()}>
          Sair
        </Link>
      );
    }
  };

  const renderFotoUsuario = () => {
    if (usuarioLogado === null) {
      return <></>;
    } else {
      return (
        <div
          className="Menu-container-imagem-jogador"
          onClick={() => tempAlterarAvatar()}
        >
          <div className="Menu-imagem-jogador">
            <img
              className="Menu-imagem"
              src={selecionarImagemAvatar(usuarioLogado?.idAvatar)}
              alt="Avatar"
            />
          </div>
          <p className="Menu-nome-usuario">{usuarioLogado.nome}</p>
        </div>
      );
    }
  };

  return (
    <div className="Menu-container">
      <Row className="Menu-row">
        <Col className="Menu-itens">
          <Link to={rota.inicio}>
            <img
              src={imagemLogo}
              alt="Logo"
              style={{ height: "30px", cursor: "pointer" }}
            />
          </Link>
        </Col>
        <Col className="Menu-itens">
          <Link id="link" to={rota.inicio}>
            Início
          </Link>
        </Col>
        <Col className="Menu-itens">
          <Link id="link" to={rota.Sugestões}>
            Sugestões
          </Link>
        </Col>
        <Col className="Menu-itens">
          <Link id="link" to={rota.Tutorial}>
            Tutorial
          </Link>
        </Col>
        <Col className="Menu-itens">
          <Link id="link" to={rota.Gerenciar}>
            Gerenciar
          </Link>
        </Col>
        <Col className="Menu-itens">{renderLoginSair()}</Col>
        <Col className="Menu-itens">{renderFotoUsuario()}</Col>
      </Row>
    </div>
  );
};

export default Menu;
