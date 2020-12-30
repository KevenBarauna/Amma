import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardSugestao from "./../../Components/CardSugestao/Index";
import sugestaoAction from "./../../Actions/SugestaoAction";
import "./Gerenciar.css";

const Gerenciar = () => {
  const dispatch = useDispatch();

  const novasSugestoesPendentes = useSelector(
    (state) => state.sugestaoReducer.novosPendentes
  );

  const primeiroAcesso = useCallback(() => {
    dispatch(sugestaoAction.buscarTodasSugestoesPendentes());
  }, [dispatch]);
  useEffect(() => {
    primeiroAcesso();
  }, [primeiroAcesso]);

  return (
    <div>
      <h2 className="gerenciar-titulo">Aprove ou reprove as novas sugestões</h2>
      {novasSugestoesPendentes.map((ticket, index) => (
        <CardSugestao
          key={index}
          ticket={ticket}
          usuario={ticket?.usuario}
          codRender={3}
        />
      ))}
    </div>
  );
};

export default Gerenciar;
