import axios from "axios";

const API_HOST = process.env.REACT_APP_API_SERVER;
const CONTROLLER_TICKET = 'ticket';

const buscarTiposTicketMock = [{ id: '1', nome: 'Amar' }, { id: '2', nome: 'Manter' }, { id: '3', nome: 'Melhorar' }, { id: '4', nome: 'Abandonar' }]

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
                resolve({ data: buscarTiposTicketMock })
            )
    })
}

export default {
    buscarTiposTicket,
}