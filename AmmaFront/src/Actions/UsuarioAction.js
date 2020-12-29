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

const buscarTopTicket = (userId) => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  usuarioService
    .buscarTopTicket(userId)
    .then((response) => {
      dispatch({
        type: USUARIO.TOP_TICKET,
        payload: response?.data,
      });
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, "Erro ao buscar top ticket")
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const buscarTicketsFavoritos = (user) => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  usuarioService
    .buscarTicketsFavoritos(user?.id)
    .then((response) => {
      dispatch({
        type: USUARIO.TICKETS_FAVORITOS,
        payload: response.data,
      });
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, "Erro ao buscar tickets favoritos")
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const favoritarTicket = (user, idTicket) => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  usuarioService
    .favoritarTicket(user?.id, idTicket)
    .then((response) => {
      dispatch({
        type: USUARIO.TICKETS_FAVORITOS,
        payload: response.data,
      });
      mensagemFlash("success", "Ticket marcado com sucesso", null, null);
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, "Erro ao favoritar ticket")
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

export default {
  verificarLogin,
  buscarTicketsFavoritos,
  buscarTopTicket,
  favoritarTicket,
  adicionarUsuario,
  sairConta,
};
