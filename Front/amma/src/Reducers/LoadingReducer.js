import { LOADING } from './../Helpers/Const/ActionType';
import { exibirDadosRedux } from './../Helpers/FuncaoPadrao/Index';

const INITIAL_STATE = {
    exibirLoading: false,
};

export default function UsuarioReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOADING.EXIBIR_LOADING:
            exibirDadosRedux(action)
            return {
                ...state,
                exibirLoading: action.payload//TRUE
            };
        case LOADING.FECHAR_LOADING:
            exibirDadosRedux(action)
            return {
                ...state,
                exibirLoading: action.payload//FALSE
            };
        default:
            return state;
    }
};