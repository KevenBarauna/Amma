import { SUGESTAO } from "./../Helpers/Const/ActionType";

const INITIAL_STATE = {
  graficoPendente: [],
  graficoCategorias: [],
  graficoAguardando: [],
  graficoBarras: [],
  novosTickets: [],
  novosPendentes: [],
};

export default function SugestaoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUGESTAO.GRAFICO_PENDENTE:
      return {
        ...state,
        graficoPendente: action.payload,
      };
    case SUGESTAO.GRAFICO_CATEGORIA:
      return {
        ...state,
        graficoCategorias: action.payload,
      };
    case SUGESTAO.GRAFICO_AGUARDANDO:
      return {
        ...state,
        graficoAguardando: action.payload,
      };
    case SUGESTAO.GRAFICO_TOP_FAVORITOS:
      return {
        ...state,
        graficoBarras: action.payload,
      };
    case SUGESTAO.NOVAS_SUGESTAO:
      return {
        ...state,
        novosTickets: action.payload,
      };
    case SUGESTAO.PENDENTES:
      return {
        ...state,
        novosPendentes: action.payload,
      };
    default:
      return state;
  }
}
