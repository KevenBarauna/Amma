import { USUARIO } from './../Helpers/Const/ActionType';
import { exibirDadosRedux } from './../Helpers/FuncaoPadrao/Index';

const INITIAL_STATE = {
    usuario: null,//{ nome: 'Keven Pacheco Baraúna', cargo: 'Corder II', idImagem: Math.floor(Math.random() * 50 + 1), favoritos: [1, 3, 5] },
    topTicket: [],
    ticketsFavoritos: [],
};

export default function UsuarioReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case USUARIO.DADOS_USER:
            exibirDadosRedux(action)
            return {
                ...state,
                usuario: action.payload
            };
        case USUARIO.TOP_TICKET:
            exibirDadosRedux(action)
            return {
                ...state,
                topTicket: action.payload
            };
        case USUARIO.TICKETS_FAVORITOS:
            exibirDadosRedux(action)
            return {
                ...state,
                ticketsFavoritos: action.payload
            };
        default:
            return state;
    }
};