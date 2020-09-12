
import { USUARIO } from './../Helpers/Const/ActionType';
import { exibirMensagemErro } from './../Helpers/FuncaoPadrao/Index';
import loadingAction from './LoadingAction';
import usuarioService from './../Services/UsuarioService';

const buscarTodosUsuarios = (user) => dispatch => {
    dispatch(loadingAction.exibirLoading())
    usuarioService.buscarTodosUsuarios()
        .then(response => {
            dispatch({
                type: USUARIO.DADOS_USER,
                payload: response.data
            });
        })
        .catch(erro => exibirMensagemErro(erro))
        .finally(dispatch(loadingAction.fecharLoading()))
}



export default {
    buscarTodosUsuarios,
}