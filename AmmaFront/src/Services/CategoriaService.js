import axios from "axios";
import http from "./../Config/http/Request";

const CONTROLLER = "categoria";

export const buscarCategorias = () => {
  return new Promise((resolve, reject) => {
    axios(http.getRequest(CONTROLLER, `/buscarCategorias`))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export default {
    buscarCategorias,
};
