import { CATEGORIA } from "./../Helpers/Const/ActionType";
import { exibirDadosRedux } from "./../Helpers/FuncaoPadrao/Index";

const INITIAL_STATE = {
  todasCategorias: [],
};

export default function CategoriaReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CATEGORIA.TODAS_CATEGORIA:
      exibirDadosRedux(action);
      return {
        ...state,
        todasCategorias: action.payload,
      };

    default:
      return state;
  }
}
