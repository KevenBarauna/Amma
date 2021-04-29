import { STATUS } from "./../Helpers/Const/ActionType";
import { exibirDadosRedux } from "./../Helpers/FuncaoPadrao/Index";

const INITIAL_STATE = {
  todosStatus: [],
};

export default function StatusReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STATUS.TODOS_STATUS:
      exibirDadosRedux(action);
      return {
        ...state,
        todosStatus: action.payload,
      };

    default:
      return state;
  }
}
