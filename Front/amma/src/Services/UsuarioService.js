import axios from "axios";

const API_HOST = process.env.REACT_APP_API_SERVER;
const CONTROLLER_USER = 'usuario';

export const buscarTodosUsuarios = () => {
    console.log(API_HOST)
    console.log(`${API_HOST}${CONTROLLER_USER}/buscarTodosUsuarios`)
    alert(API_HOST);
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `${API_HOST}${CONTROLLER_USER}/buscarTodosUsuarios`,
            headers: { "content-type": "application/json", },
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                reject(error)
            )
    })
}

export default {
    buscarTodosUsuarios,
}