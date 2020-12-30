import { USUARIO } from "./../Helpers/Const/ActionType";

const INITIAL_STATE = {
  usuario: JSON.parse(localStorage.getItem("usuario")),
  topSugestoes: [],
  favoritos: [],
};

export default function UsuarioReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USUARIO.DADOS_USER:
      return {
        ...state,
        usuario: action.payload,
      };
    case USUARIO.TOP_SUGESTOES:
      return {
        ...state,
        topSugestoes: action.payload,
      };
    case USUARIO.SUGESTOES_FAVORITAS:
      return {
        ...state,
        favoritos: action.payload,
      };
    default:
      return state;
  }
}
