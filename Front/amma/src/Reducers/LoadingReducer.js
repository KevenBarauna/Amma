import { LOADING } from './../Helpers/Const/ActionType';

const INITIAL_STATE = {
    exibirLoading: false,
};

export default function UsuarioReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOADING.EXIBIR_LOADING:
            return {
                ...state,
                exibirLoading: action.payload//TRUE
            };
        case LOADING.FECHAR_LOADING:
            return {
                ...state,
                exibirLoading: action.payload//FALSE
            };
        default:
            return state;
    }
};