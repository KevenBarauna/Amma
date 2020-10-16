import axios from "axios";
import { sugestaoServiceMock } from './../Helpers/Const/ConstMock';

const API_HOST = process.env.REACT_APP_API_SERVER;
const CONTROLLER_SUGESTAO = 'sugestao';

export const buscarTodosTickets = () => {
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



export default {
    buscarTodosTickets,
}