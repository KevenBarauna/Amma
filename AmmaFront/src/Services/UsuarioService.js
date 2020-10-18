import axios from "axios";
import { usuarioServiceMock } from './../Helpers/Const/ConstMock';


const API_HOST = process.env.REACT_APP_API_SERVER;
const CONTROLLER_USER = 'usuario';

export const verificarLogin = (user) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "POST",
            url: `${API_HOST}${CONTROLLER_USER}/verificarLogin`,
            headers: { "content-type": "application/json", },
            data: JSON.stringify(user),
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                //reject(error)
                resolve({ data: usuarioServiceMock(user, 'verificarLogin') })
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
                resolve({ data: usuarioServiceMock(usuario, 'buscarTopTicket') })
            )
    })
}

export const buscarTicketsFavoritos = (idUsuario) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `${API_HOST}${CONTROLLER_USER}/buscarTicketsFavoritos`,
            headers: { "content-type": "application/json", },
            data: JSON.stringify(idUsuario),
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                //reject(error)
                resolve({ data: usuarioServiceMock(null, 'buscarTicketsFavoritos') })
            )
    })
}

export const adicionarUsuario = (usuario) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "POST",
            url: `${API_HOST}${CONTROLLER_USER}/adicionarNovoUsuario`,
            headers: { "content-type": "application/json", },
            data: JSON.stringify(usuario),
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                //reject(error)
                resolve({ data: usuarioServiceMock(usuario, 'adicionarUsuario') })
            )
    })
}

export const favoritarTicket = (idUsuario, idTicket) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "POST",
            url: `${API_HOST}${CONTROLLER_USER}/favoritarTicket`,
            headers: { "content-type": "application/json", },
            data: JSON.stringify(idUsuario,idTicket),
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                //reject(error)
                resolve({ data: usuarioServiceMock(idTicket, 'favoritarTicket') })
            )
    })
}

export default {
    verificarLogin,
    buscarTopTicket,
    buscarTicketsFavoritos,
    adicionarUsuario,
    favoritarTicket,
}