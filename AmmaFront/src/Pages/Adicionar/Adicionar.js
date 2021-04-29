import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Col, Row } from "react-bootstrap";
import CardSugestao from "./../../Components/CardSugestao/Index";
import sugestaoAction from "./../../Actions/SugestaoAction";
import ticketAction from "./../../Actions/SugestaoAction";
import Select from "react-select";
import "./Adicionar.scss";

const Adicionar = () => {
  const dispatch = useDispatch();
  let card = {};

  const usuario = useSelector((state) => state.usuarioReducer.usuario);

  const tiposCategoria = useSelector(
    (state) => state.ticketReducer.tiposTicket
  );

  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState({
    value: "0",
    label: "carregando...",
  });
  const [descricao, setDescricao] = useState("");
  const [exibirNome, setExibirNome] = useState(false);

  const handleCategoria = (value) => {
    setCategoria(value);
  };

  var showUser = document.getElementById("showUser");

  const handleSubmit = () => {
    setExibirNome(showUser.checked ? true : false);
    let cardSalvar = {
      usuario: usuario,
      idUsuario: usuario?.id,
      titulo: titulo,
      descricao: descricao,
      data: new Date(),
      idTipo: categoria?.value,
    };
    dispatch(sugestaoAction.salvarNovaSugestao(cardSalvar));
  };

  const montarObjetoCard = () => {
    card.usuario = {};
    card.usuario.nome = usuario?.nome;
    card.usuario.cargo = usuario?.cargo;
    card.titulo = titulo;
    card.descricao = descricao;
    if (exibirNome === true) {
      card.usuario.nome = null;
      card.usuario.cargo = null;
    }
    return card;
  };

  const primeiroAcesso = useCallback(() => {
    dispatch(ticketAction.buscarTiposTicket());
  }, [dispatch]);
  useEffect(() => {
    primeiroAcesso();
  }, [primeiroAcesso]);

  return (
    <>
      <div className="adicionar-fundo pageAdicionar">
        <div className="adicionar-container-transparente" />
        <div>
          <div className="adicionar-container-form">
            <Form>
              <Form.Row style={{ marginTop: "30px" }}>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>* Título</Form.Label>
                  <Form.Control
                    type="text"
                    maxLength={60}
                    placeholder="Nome do card"
                    onChange={(e) => setTitulo(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>* Categoria</Form.Label>
                  <Select
                    id="select-categoria"
                    placeholder="Selecione"
                    isSearchable={false}
                    label
                    noOptionsMessage={() => "Nenhuma opção disponível"}
                    onChange={handleCategoria}
                    options={tiposCategoria?.map((tipo) => {
                      return {
                        value: tipo.id,
                        label: tipo.titulo,
                      };
                    })}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="4"
                  maxLength={115}
                  placeholder="Fale mais sobre seu ticket.."
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </Form.Group>

              <Form.Group id="formGridCheckbox">
                <Row>
                  <Form.Check type="checkbox" label="Anonimato" id="showUser" />
                </Row>
              </Form.Group>

              <Button
                variant="danger"
                className="btn-padrao"
                style={{ marginBottom: "30px" }}
                onClick={() => handleSubmit()}
              >
                Salvar
              </Button>
              <Row>
                Atenção: não é possível editar o ticket depois de salvar.
              </Row>
            </Form>
          </div>
          <div className="adicionar-card">
            <CardSugestao
              ticket={montarObjetoCard()}
              usuario={usuario}
              codRender={2}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Adicionar;
