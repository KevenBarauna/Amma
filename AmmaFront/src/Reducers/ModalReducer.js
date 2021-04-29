import { MODAL } from "./../Helpers/Const/ActionType";
import { exibirDadosRedux } from "./../Helpers/FuncaoPadrao/Index";

const INITIAL_STATE = {
  exibir: false,
  titulo: null,
  descricao: null,
  funcao: null,
};

export default function ModalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MODAL.EXIBIR:
      exibirDadosRedux(action);
      return {
        ...state,
        exibir: true,
      };
    case MODAL.FECHAR:
      exibirDadosRedux(action);
      return {
        ...state,
        exibir: false,
      };
    case MODAL.TITULO:
      exibirDadosRedux(action);
      return {
        ...state,
        titulo: action.payload,
      };
    case MODAL.DESCRICAO:
      exibirDadosRedux(action);
      return {
        ...state,
        descricao: action.payload,
      };
    case MODAL.FUNCAO_PADRAO:
      exibirDadosRedux(action);
      return {
        ...state,
        funcao: action.payload,
      };
    default:
      return state;
  }
}
