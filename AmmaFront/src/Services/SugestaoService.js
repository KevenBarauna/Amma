import axios from "axios";
import http from "./../Config/http/Request";

const API_HOST = process.env.REACT_APP_API_SERVER;
const CONTROLLER = "sugestao";

export const salvarNovaSugestao = (sugestao) => {
  return new Promise((resolve, reject) => {
    axios(http.postRequest(CONTROLLER, `/adicionar`, sugestao))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export const apagarSugestao = (idSugestao) => {
  return new Promise((resolve, reject) => {
    axios(http.postRequest(CONTROLLER, "/apagar", idSugestao))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export const buscarTopSugestoesUsuario = (idUsuario) => {
  return new Promise((resolve, reject) => {
    axios(
      http.getRequest(
        CONTROLLER,
        `/buscaTopTicketUsuario?idUsuario=${idUsuario}`
      )
    )
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export const buscarSugestoesFavoritas = (idUsuario) => {
  return new Promise((resolve, reject) => {
    axios(
      http.getRequest(
        CONTROLLER,
        `/buscarTicketsFavoritos?idUsuario=${idUsuario}`
      )
    )
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};


export const favoritarSugestao = (idUsuario, idTicket) => {
  return new Promise((resolve, reject) => {
    axios(http.postRequest(CONTROLLER, "/aprovar", idUsuario,idTicket))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export const buscarGraficoPendente = () => {
  return new Promise((resolve, reject) => {
    axios(http.getRequest(CONTROLLER, `/buscarGraficoPendente`))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export const buscarGraficoCategorias = () => {
  return new Promise((resolve, reject) => {
    axios(http.getRequest(CONTROLLER, `/buscarGraficoCategorias`))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export const buscarGraficoStatus = () => {
  return new Promise((resolve, reject) => {
    axios(http.getRequest(CONTROLLER, `/buscarGraficoStatus`))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export const buscarGraficoTopSugestoes = () => {
  return new Promise((resolve, reject) => {
    axios(http.getRequest(CONTROLLER, `/buscarGraficoTopSugestoes`))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export const buscarTodasSugestoes = () => {
  return new Promise((resolve, reject) => {
    axios(http.getRequest(CONTROLLER, `/buscarTodasSugestoes`))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export const buscarTodasSugestoesPendentes = () => {
  return new Promise((resolve, reject) => {
    axios(http.getRequest(CONTROLLER, `/buscarTodasSugestoesPendentes`))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export const aprovarSugestao = (ticket) => {
  return new Promise((resolve, reject) => {
    axios(http.postRequest(CONTROLLER, "/aprovar", ticket))
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
