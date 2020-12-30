import { USUARIO } from "./../Helpers/Const/ActionType";
import { AlertaModal, mensagemFlash } from "./../Helpers/FuncaoPadrao/Index";
import loadingAction from "./LoadingAction";
import usuarioService from "./../Services/UsuarioService";
import mensagem from "./../Helpers/Const/Mensagem";

const verificarLogin = (user) => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  usuarioService
    .verificarLogin(user)
    .then((response) => {
      if (response?.data?.id === 0) {
        AlertaModal("error", null, null, mensagem.NENHUM_USUARIO);
      } else {
        dispatch({
          type: USUARIO.DADOS_USER,
          payload: response?.data,
        });
        salvarUsuarioLocalStorage(response?.data);
      }
    })
    .catch((erro) => AlertaModal("error", erro, null, mensagem.ERRO_LOGIN))
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
    .catch((erro) =>
      AlertaModal("error", erro, null, mensagem.ERRO_NOVO_USUARIO)
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const salvarUsuarioLocalStorage = (user) => {
  localStorage.setItem("usuario", JSON.stringify(user));
};

const removerUsuarioLocalStorage = () => {
  localStorage.removeItem("usuario");
};

const buscarTopSugestoesUsuario = (userId) => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  usuarioService
    .buscarTopSugestoesUsuario(userId)
    .then((response) => {
      dispatch({
        type: USUARIO.TOP_SUGESTOES,
        payload: response?.data,
      });
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, mensagem.ERRO_TOP_SUGESTOES_USUARIO)
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const buscarSugestoesFavoritas = (user) => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  usuarioService
    .buscarSugestoesFavoritas(user?.id)
    .then((response) => {
      dispatch({
        type: USUARIO.SUGESTOES_FAVORITAS,
        payload: response.data,
      });
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, mensagem.ERRO_SUGESTOES_FAVORITAS_USUARIO)
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const favoritarSugestao = (user, idTicket) => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  usuarioService
    .favoritarSugestao(user?.id, idTicket)
    .then((response) => {
      dispatch({
        type: USUARIO.SUGESTOES_FAVORITAS,
        payload: response?.data,
      });
      mensagemFlash("success", mensagem.FAVORITAR_SUGESTAO, null, null);
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, mensagem.FAVORITAR_SUGESTAO_ERRO)
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

export default {
  verificarLogin,
  buscarTopSugestoesUsuario,
  buscarSugestoesFavoritas,
  favoritarSugestao,
  adicionarUsuario,
  sairConta,
};
