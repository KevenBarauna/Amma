import axios from "axios";
import { ticketServiceMock } from './../Helpers/Const/ConstMock';

const API_HOST = process.env.REACT_APP_API_SERVER;
const CONTROLLER_TICKET = 'ticket';

export const buscarTiposTicket = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `${API_HOST}${CONTROLLER_TICKET}/buscarTiposTicket`,
            headers: { "content-type": "application/json", },
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                //reject(error)
                resolve({ data: ticketServiceMock('buscarTiposTicket') })
            )
    })
}

export const buscarGraficoPendente = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `${API_HOST}${CONTROLLER_TICKET}/buscarGraficoPendente`,
            headers: { "content-type": "application/json", },
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                //reject(error)
                resolve({ data: ticketServiceMock('buscarGraficoPendente') })
            )
    })
}

export const buscarGraficoCategorias = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `${API_HOST}${CONTROLLER_TICKET}/buscarGraficoCategorias`,
            headers: { "content-type": "application/json", },
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                //reject(error)
                resolve({ data: ticketServiceMock('buscarGraficoCategorias') })
            )
    })
}

export const buscarGraficoSolucionados = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `${API_HOST}${CONTROLLER_TICKET}/buscarGraficoSolucionados`,
            headers: { "content-type": "application/json", },
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                //reject(error)
                resolve({ data: ticketServiceMock('buscarGraficoSolucionados') })
            )
    })
}

export const buscarGraficoTopTicket = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `${API_HOST}${CONTROLLER_TICKET}/buscarGraficoTopTicket`,
            headers: { "content-type": "application/json", },
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                //reject(error)
                resolve({ data: ticketServiceMock('buscarGraficoTopTicket') })
            )
    })
}

export const buscarNovosTickets = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `${API_HOST}${CONTROLLER_TICKET}/buscarTicketsAtivos`,
            headers: { "content-type": "application/json", },
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                //reject(error)
                resolve({ data: ticketServiceMock('buscarTicketsAtivos') })
            )
    })
}


export const buscarTodosTicketsPendentes = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `${API_HOST}${CONTROLLER_TICKET}/buscarTodosTicketsPendentes`,
            headers: { "content-type": "application/json", },
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                //reject(error)
                resolve({ data: ticketServiceMock('buscarTodosTicketsPendentes') })
            )
    })
}

export const aprovarTicket = (idTicket) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "POST",
            url: `${API_HOST}${CONTROLLER_TICKET}/aprovarTicket`,
            headers: { "content-type": "application/json", },
            data: JSON.stringify(idTicket),
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                //reject(error)
                resolve("tudo certo")
            )
    })
}



export default {
    buscarTiposTicket,
    buscarGraficoPendente,
    buscarGraficoCategorias,
    buscarGraficoSolucionados,
    buscarGraficoTopTicket,
    buscarNovosTickets,
    buscarTodosTicketsPendentes,
    aprovarTicket,
}