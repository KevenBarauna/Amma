import axios from "axios";
import http from "./../Config/http/Request";

const CONTROLLER_TICKET = "ticket";

export const buscarTiposTicket = () => {
  return new Promise((resolve, reject) => {
    axios(http.getRequest(CONTROLLER_TICKET, `/buscarTipos`))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export default {
  buscarTiposTicket,
};
