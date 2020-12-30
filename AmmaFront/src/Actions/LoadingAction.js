import { LOADING } from "./../Helpers/Const/ActionType";

const exibirLoading = () => (dispatch) => {
  dispatch({
    type: LOADING.EXIBIR_LOADING,
    payload: true,
  });
};

const fecharLoading = () => (dispatch) => {
  dispatch({
    type: LOADING.FECHAR_LOADING,
    payload: false,
  });
};

export default {
  exibirLoading,
  fecharLoading,
};
