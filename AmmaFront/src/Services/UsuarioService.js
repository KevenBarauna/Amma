import axios from "axios";
import http from "./../Config/http/Request";

const CONTROLLER = "usuario";

export const verificarLogin = (user) => {
  return new Promise((resolve, reject) => {
    axios(http.postRequest(CONTROLLER, "/login", user))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export const adicionarUsuario = (usuario) => {
  return new Promise((resolve, reject) => {
    axios(http.postRequest(CONTROLLER, "/novoUsuario", usuario))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export const editarUsuario = (usuario) => {
  return new Promise((resolve, reject) => {
    axios(http.postRequest(CONTROLLER, "/editar", usuario))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export default {
  verificarLogin,
  adicionarUsuario,
  editarUsuario,
};
