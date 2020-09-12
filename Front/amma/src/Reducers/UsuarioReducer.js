import { USUARIO } from './../Helpers/Const/ActionType';
import { exibirDadosRedux } from './../Helpers/FuncaoPadrao/Index';

const INITIAL_STATE = {
    usuario: null,
};

export default function UsuarioReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case USUARIO.USER:
            exibirDadosRedux(action)
            return {
                ...state,
                usuario: action.payload
            };
        default:
            return state;
    }
};