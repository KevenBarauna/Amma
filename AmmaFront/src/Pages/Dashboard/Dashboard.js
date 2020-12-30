import React, { useCallback, useEffect } from "react";
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
  const dadosAguardando = useSelector(
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

  const primeiroAcesso = useCallback(() => {
    dispatch(usuarioAction.buscarSugestoesFavoritas());
    dispatch(sugestaoAction.buscarGraficoPendente());
    dispatch(sugestaoAction.buscarGraficoCategorias());
    dispatch(sugestaoAction.buscarGraficoSolucionados());
    dispatch(sugestaoAction.buscarGraficoTopSugestoes());
  }, [dispatch]);
  useEffect(() => {
    primeiroAcesso();
  }, [primeiroAcesso]);

  return (
    <>
      <Row className="grafico-pizza-row">
        <GraficoPizzaGenerico dados={dadosPendente} titulo={"Pendente"} />
        <GraficoPizzaGenerico dados={dadosCategorias} titulo={"Categorias"} />
        <GraficoPizzaGenerico dados={dadosAguardando} titulo={"Solucionados"} />
      </Row>
      <GraficoBarra dados={dadosGraficoBarra} titulo={"Votos"} />
      {todosTickets.map((ticket, index) => (
        <CardSugestao
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
