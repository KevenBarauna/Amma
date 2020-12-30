import React from "react";
import { useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
import usuarioAction from "./../../Actions/UsuarioAction";
import sugestaoAction from "./../../Actions/SugestaoAction";
import "./CardSugestao.css";
import { MODAL } from "./../../Helpers/Const/ActionType";
import { selecionarImagemAvatar } from "./../../Helpers/FuncaoPadrao/ImagemUsuario";
import imagemfavoritoTrue from "./../../assets/image/favorito-true.png";
import imagemfavoritoFalse from "./../../assets/image/favorito-false.png";
import imagemApagar from "./../../assets/image/icone-apagar.svg";
import imagemAprovado from "./../../assets/image/icone-aprovado.svg";

const CardSugestao = (props) => {
  const dispatch = useDispatch();
  const { ticketsFavoritos, ticket, usuario, codRender } = props;
  let ticketSelecionado;

  const handleClickFavorito = (idFavorito) => {
    dispatch(usuarioAction.favoritarTicket(usuario, idFavorito));
  };

  const handleAprovarTicket = (ticket) => {
    dispatch(sugestaoAction.aprovarSugestao(ticket));
  };

  const handleApagarTicket = (ticket) => {
    ticketSelecionado = ticket;
    dispatch({
      type: MODAL.FUNCAO_PADRAO,
      payload: ApagarTicket,
    });
    dispatch({
      type: MODAL.TITULO,
      payload: "Apagar Ticket?",
    });
    dispatch({
      type: MODAL.DESCRICAO,
      payload: "Essa ação é permanente.",
    });
    dispatch({
      type: MODAL.EXIBIR,
      payload: true,
    });
  };

  const ApagarTicket = (id) => {
    dispatch({
      type: MODAL.FECHAR,
      payload: true,
    });
    dispatch(sugestaoAction.apagarSugestao(ticketSelecionado?.id));
  };

  const getCorTitulo = () => {
    switch (ticket?.idTipo) {
      case 1:
        return "CardSugestao-imagem-jogador CardSugestao-imagem-tipoAdicionar";
      case 2:
        return "CardSugestao-imagem-jogador CardSugestao-imagem-tipoManter";
      case 3:
        return "CardSugestao-imagem-jogador CardSugestao-imagem-tipoMelhorar";
      case 4:
        return "CardSugestao-imagem-jogador CardSugestao-imagem-tipoAbandonar";
      default:
        return "CardSugestao-imagem-jogador";
    }
  };

  const renderVotos = () => {
    //ID = 1
    return (
      <>
        <div onClick={() => handleClickFavorito(ticket?.id)}>
          {" "}
          <img
            className="CardSugestao-favorito"
            src={
              ticketsFavoritos?.indexOf(ticket?.id) !== -1
                ? imagemfavoritoTrue
                : imagemfavoritoFalse
            }
            alt="Ícone favorito"
          />
        </div>
        <div className="CardSugestao-numero-voto">{ticket?.votos}</div>
      </>
    );
  };

  const renderVisualizacao = () => {
    //ID = 2
    return (
      <>
        <div>
          {" "}
          <img
            className="CardSugestao-favorito"
            src={imagemfavoritoFalse}
            alt="Ícone favorito"
          />
        </div>
        <div className="CardSugestao-numero-voto">{0}</div>
      </>
    );
  };

  const renderAdm = () => {
    //ID = 3
    return (
      <>
        <div onClick={() => handleApagarTicket(ticket)}>
          {" "}
          <img
            style={{ height: "30px", marginLeft: "4px", cursor: "pointer" }}
            src={imagemApagar}
            alt="Ícone apagar"
          />
        </div>
        <div onClick={() => handleAprovarTicket(ticket)}>
          {" "}
          <img
            style={{ height: "30px", marginLeft: "4px", cursor: "pointer" }}
            src={imagemAprovado}
            alt="Ícone aprovado"
          />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="CardSugestao-row">
        <Row>
          <Col sm={4} lg={4} md={4} xs={4}>
            <Row>
              <div className={getCorTitulo()}>
                <img
                  className="CardSugestao-imagem"
                  src={selecionarImagemAvatar(usuario?.idAvatar)}
                  alt="Avatar"
                />
              </div>
              <Col className="CardSugestao-col-usuario">
                <Row>
                  <div className="CardSugestao-nomeUsuario">
                    {ticket?.usuario?.nome || "Anônimo"}
                  </div>
                </Row>
                <Row>
                  <div>{ticket?.usuario?.cargo || null}</div>
                </Row>
              </Col>
              <Col className="CardSugestao-linha" />
            </Row>
          </Col>

          <Col>
            <Col className="CardSugestao-tocket">
              <Row className="CardSugestao-ticket-titulo">{ticket?.titulo}</Row>
              <Row>{ticket?.descricao}</Row>
            </Col>
            <Col className="CardSugestao-linha" />
          </Col>
          <Col
            sm={1}
            lg={1}
            md={1}
            xs={1}
            className="CardSugestao-ticket-votos"
          >
            <Row>
              {codRender === 1
                ? renderVotos()
                : codRender === 2
                ? renderVisualizacao()
                : codRender === 3
                ? renderAdm()
                : null}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CardSugestao;
