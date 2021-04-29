import axios from "axios";
import http from "./../Config/http/Request";

const CONTROLLER = "status";

export const buscarStatus = () => {
  return new Promise((resolve, reject) => {
    axios(http.getRequest(CONTROLLER, `/buscarStatus`))
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};

export default {
  buscarStatus,
};
