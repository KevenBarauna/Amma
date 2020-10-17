import axios from "axios";
import { sugestaoServiceMock } from './../Helpers/Const/ConstMock';

const API_HOST = process.env.REACT_APP_API_SERVER;
const CONTROLLER_SUGESTAO = 'sugestao';

export const buscarTodosTicketsPendentes = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `${API_HOST}${CONTROLLER_SUGESTAO}/buscarTodosTickets`,
            headers: { "content-type": "application/json", },
        })
            .then(res =>
                resolve(res)
            )
            .catch(error =>
                //reject(error)
                resolve({ data: sugestaoServiceMock('buscarTodosTickets') })
            )
    })
}

export const aprovarTicket = (idTicket) => {
    return new Promise((resolve, reject) => {
        axios({
            method: "POST",
            url: `${API_HOST}${CONTROLLER_SUGESTAO}/aprovarTicket`,
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
    buscarTodosTicketsPendentes,
    aprovarTicket,
}