import { MODAL } from "./../Helpers/Const/ActionType";

const INITIAL_STATE = {
  exibir: false,
  titulo: null,
  descricao: null,
  funcao: null,
};

export default function ModalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MODAL.EXIBIR:
      return {
        ...state,
        exibir: true,
      };
    case MODAL.FECHAR:
      return {
        ...state,
        exibir: false,
      };
    case MODAL.TITULO:
      return {
        ...state,
        titulo: action.payload,
      };
    case MODAL.DESCRICAO:
      return {
        ...state,
        descricao: action.payload,
      };
    case MODAL.FUNCAO_PADRAO:
      return {
        ...state,
        funcao: action.payload,
      };
    default:
      return state;
  }
}
