import { USUARIO } from "./../Helpers/Const/ActionType";
import loadingAction from "./LoadingAction";
import usuarioService from "./../Services/UsuarioService";
import { exibirMensagemErro } from "./../Helpers/FuncaoPadrao/Index";

const salvarUsuarioLocalStorage = (user) => {
  localStorage.setItem("usuario", JSON.stringify(user));
};

const removerUsuarioLocalStorage = () => {
  localStorage.removeItem("usuario");
};

const verificarLogin = (user) => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  usuarioService
    .verificarLogin(user)
    .then((response) => {
      dispatch({
        type: USUARIO.DADOS_USER,
        payload: response?.data,
      });
      salvarUsuarioLocalStorage(response?.data);
    })
    .catch((erro) => exibirMensagemErro(erro))
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const sairConta = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  dispatch({
    type: USUARIO.DADOS_USER,
    payload: null,
  });
  removerUsuarioLocalStorage();
  dispatch(loadingAction.fecharLoading());
};

const adicionarUsuario = (user) => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  usuarioService
    .adicionarUsuario(user)
    .then((response) => {
      dispatch({
        type: USUARIO.DADOS_USER,
        payload: response?.data,
      });
      salvarUsuarioLocalStorage(response?.data);
    })
    .catch((erro) => exibirMensagemErro(erro))
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

export default {
  verificarLogin,
  adicionarUsuario,
  sairConta,
};
