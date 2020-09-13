import { USUARIO } from './../Helpers/Const/ActionType';
import { exibirDadosRedux } from './../Helpers/FuncaoPadrao/Index';

const INITIAL_STATE = {
    usuario: null,
    topTicket: [],
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
        default:
            return state;
    }
};