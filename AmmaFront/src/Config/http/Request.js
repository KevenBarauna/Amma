const API_HOST = process.env.REACT_APP_API_SERVER;

export const postRequest = (controler, rota, data) => {
  return {
    method: "POST",
    url: `${API_HOST}${controler}${rota}`,
    headers: { "content-type": "application/json" },
    data: JSON.stringify(data),
  };
};

export const getRequest = (controler, rota) => {
  return {
    method: "GET",
    url: `${API_HOST}${controler}${rota}`,
    headers: { "content-type": "application/json" },
  };
};

export default {
  postRequest,
  getRequest,
};
