import axios from "axios";
import { TOP_TICKET_PERFIL } from './../Helpers/Const/ConstMock';

const API_HOST = process.env.REACT_APP_API_SERVER;
const CONTROLLER_USER = 'usuario';

export const buscarTodosUsuarios = () => {
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

export const buscarTopTicket = (usuario) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `${API_HOST}${CONTROLLER_USER}/buscarTopTicket`,
            headers: { "content-type": "application/json", },
            data: JSON.stringify(usuario),
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                //reject(error)
                resolve({ data: TOP_TICKET_PERFIL })
            )
    })
}

export const adicionarUsuario = (usuario) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `${API_HOST}${CONTROLLER_USER}/adicionarNovoUsuario`,
            headers: { "content-type": "application/json", },
            data: JSON.stringify(usuario),
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
    buscarTopTicket,
    adicionarUsuario,
}