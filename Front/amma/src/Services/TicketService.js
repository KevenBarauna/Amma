import axios from "axios";
import { TiposTicketMock } from './../Helpers/Const/ConstMock';
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
                resolve({ data: TiposTicketMock })
            )
    })
}

export default {
    buscarTiposTicket,
}