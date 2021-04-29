import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import usuarioAction from "./../../Actions/UsuarioAction";
import sugestaoAction from "./../../Actions/SugestaoAction";
import "./Dashboard.css";
import GraficoPizzaGenerico from "./../../Components/GraficoPizza/ContainerGrafico";
import GraficoBarra from "./../../Components/GraficoBarra/ContainerGrafico";
import CardSugestao from "./../../Components/CardSugestao/Index";

const Dashboard = () => {
  const dispatch = useDispatch();

  const dadosPendente = useSelector(
    (state) => state.sugestaoReducer.graficoPendente
  );
  const dadosCategorias = useSelector(
    (state) => state.sugestaoReducer.graficoCategorias
  );
  const dadosStatus = useSelector(
    (state) => state.sugestaoReducer.graficoAguardando
  );
  const dadosGraficoBarra = useSelector(
    (state) => state.sugestaoReducer.graficoBarras
  );
  const todosTickets = useSelector(
    (state) => state.sugestaoReducer.novosTickets
  );
  const sugestoesFavoritas = useSelector(
    (state) => state.usuarioReducer.favoritos
  );
  const usuario = useSelector((state) => state.usuarioReducer.usuario);

  const [mensagemHorario, setMensagemHorario] = useState("");
  const [mensagemNotificacao, setMensagemNotificacao] = useState("");

  const primeiroAcesso = useCallback(() => {
    dispatch(usuarioAction.buscarSugestoesFavoritas());
    dispatch(sugestaoAction.buscarGraficoPendente());
    dispatch(sugestaoAction.buscarGraficoCategorias());
    dispatch(sugestaoAction.buscarGraficoSolucionados());
    dispatch(sugestaoAction.buscarGraficoTopSugestoes());
  }, [dispatch]);

  const carregarMensagem = useCallback(() => {
    var data = new Date();
    var hora = data.getHours();

    if (hora >= 6 && hora < 12) {
      setMensagemHorario(`Bom dia, ${usuario?.nome}`);
    } else if (hora >= 12 && hora < 18) {
      setMensagemHorario(`Boa tarde, ${usuario?.nome}`);
    } else if (hora >= 18 && hora < 23) {
      setMensagemHorario(`Boa noite, ${usuario?.nome}`);
    } else if (hora >= 23 && hora < 6) {
      setMensagemHorario(`Boa madrugada, ${usuario?.nome}`);
    }
    setMensagemNotificacao("Você tem novas nofiticações")
  }, [usuario]);

  useEffect(() => {
    carregarMensagem();
    primeiroAcesso();
  }, [primeiroAcesso,carregarMensagem]);

  return (
    <>
      <div className="inicio-mensagem">
        <p className="inicio-mensagem-horario"> {mensagemHorario}</p>
        <p className="inicio-mensagem-notificacao"> {mensagemNotificacao}</p>
      </div>

      <Row className="grafico-pizza-row">
        <GraficoPizzaGenerico dados={dadosPendente} titulo={"Pendente"} />
        <GraficoPizzaGenerico dados={dadosCategorias} titulo={"Categorias"} />
        <GraficoPizzaGenerico dados={dadosStatus} titulo={"Status"} />
      </Row>
      <GraficoBarra dados={dadosGraficoBarra} titulo={"Votos"} />
      {todosTickets.map((ticket, index) => (
        <CardSugestao
          index={index}
          ticketsFavoritos={sugestoesFavoritas}
          ticket={ticket}
          usuario={usuario}
          codRender={1}
        />
      ))}
    </>
  );
};

export default Dashboard;
