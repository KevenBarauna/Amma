import axios from "axios";
import http from "./../Config/http/Request";
import { ticketServiceMock } from "./../Helpers/Const/ConstMock";

const API_HOST = process.env.REACT_APP_API_SERVER;
const CONTROLLER_TICKET = "ticket";
const CONTROLLER_SUGESTAO = "sugestao";

export const salvarNovaSugestao = (sugestao) => {
  return new Promise((resolve, reject) => {
    axios(http.postRequest(CONTROLLER_SUGESTAO, `/adicionar`, sugestao))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export const buscarGraficoPendente = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `${API_HOST}${CONTROLLER_TICKET}/buscarGraficoPendente`,
      headers: { "content-type": "application/json" },
    })
      .then((res) => resolve(res))
      .catch((error) =>
        //reject(error)
        resolve({ data: ticketServiceMock("buscarGraficoPendente") })
      );
  });
};

export const buscarGraficoCategorias = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `${API_HOST}${CONTROLLER_TICKET}/buscarGraficoCategorias`,
      headers: { "content-type": "application/json" },
    })
      .then((res) => resolve(res))
      .catch((error) =>
        //reject(error)
        resolve({ data: ticketServiceMock("buscarGraficoCategorias") })
      );
  });
};

export const buscarGraficoTopSugestoes = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `${API_HOST}${CONTROLLER_TICKET}/buscarGraficoTopTicket`,
      headers: { "content-type": "application/json" },
    })
      .then((res) => resolve(res))
      .catch((error) =>
        //reject(error)
        resolve({ data: ticketServiceMock("buscarGraficoTopTicket") })
      );
  });
};

export const buscarTodasSugestoes = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `${API_HOST}${CONTROLLER_TICKET}/buscarTicketsAtivos`,
      headers: { "content-type": "application/json" },
    })
      .then((res) => resolve(res))
      .catch((error) =>
        //reject(error)
        resolve({ data: ticketServiceMock("buscarTicketsAtivos") })
      );
  });
};

export const buscarTodasSugestoesPendentes = (status) => {
  return new Promise((resolve, reject) => {
    axios(
      http.getRequest(
        CONTROLLER_SUGESTAO,
        `/buscaSugestoesPorStatus?status=${status}`
      )
    )
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export const aprovarSugestao = (ticket) => {
  return new Promise((resolve, reject) => {
    axios(http.postRequest(CONTROLLER_SUGESTAO, "/aprovar", ticket))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export const apagarSugestao = (idSugestao) => {
  return new Promise((resolve, reject) => {
    axios(http.postRequest(CONTROLLER_SUGESTAO, "/apagar", idSugestao))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export default {
  buscarGraficoTopSugestoes,
  salvarNovaSugestao,
  buscarGraficoPendente,
  buscarGraficoCategorias,
  buscarTodasSugestoes,
  buscarTodasSugestoesPendentes,
  aprovarSugestao,
  apagarSugestao,
};
