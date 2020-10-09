
import { USUARIO } from './../Helpers/Const/ActionType';
import { exibirMensagemErro, exibirMensagemSucesso } from './../Helpers/FuncaoPadrao/Index';
import loadingAction from './LoadingAction';
import usuarioService from './../Services/UsuarioService';

const verificarLogin = (user) => dispatch => {
    dispatch(loadingAction.exibirLoading())
    usuarioService.verificarLogin(user)
        .then(response => {
            dispatch({
                type: USUARIO.DADOS_USER,
                payload: response.data
            });
        })
        .catch(erro => exibirMensagemErro(erro))
        .finally(dispatch(loadingAction.fecharLoading()))
}

const buscarTopTicket = (user) => dispatch => {
    dispatch(loadingAction.exibirLoading())
    usuarioService.buscarTopTicket(user)
        .then(response => {
            dispatch({
                type: USUARIO.TOP_TICKET,
                payload: response.data
            });
        })
        .catch(erro => exibirMensagemErro(erro))
        .finally(dispatch(loadingAction.fecharLoading()))
}

const adicionarUsuario = (user) => dispatch => {
    dispatch(loadingAction.exibirLoading())
    usuarioService.adicionarUsuario(user)
        .then(response => {
            exibirMensagemSucesso(response)
        })
        .catch(erro => exibirMensagemErro(erro))
        .finally(dispatch(loadingAction.fecharLoading()))
}



export default {
    verificarLogin,
    buscarTopTicket,
    adicionarUsuario,
}