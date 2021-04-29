import { SUGESTAO } from "./../Helpers/Const/ActionType";
import { exibirDadosRedux } from "./../Helpers/FuncaoPadrao/Index";

const INITIAL_STATE = {
  graficoPendente: [],
  graficoCategorias: [],
  graficoStatus: [],
  graficoBarras: [],
  todasSugestoes: [],
};

export default function SugestaoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUGESTAO.GRAFICO_PENDENTE:
      exibirDadosRedux(action)
      return {
        ...state,
        graficoPendente: action.payload,
      };
    case SUGESTAO.GRAFICO_CATEGORIA:
      exibirDadosRedux(action)
      return {
        ...state,
        graficoCategorias: action.payload,
      };
    case SUGESTAO.GRAFICO_STATUS:
      exibirDadosRedux(action)
      return {
        ...state,
        graficoStatus: action.payload,
      };
    case SUGESTAO.GRAFICO_BARRAS:
      exibirDadosRedux(action)
      return {
        ...state,
        graficoBarras: action.payload,
      };
    case SUGESTAO.TODAS_SUGESTOES:
      exibirDadosRedux(action)
      return {
        ...state,
        todasSugestoes: action.payload,
      };

    default:
      return state;
  }
}
