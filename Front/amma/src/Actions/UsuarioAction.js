
import { USUARIO } from './../Helpers/Const/ActionType';
import { exibirMensagemErro } from './../Helpers/FuncaoPadrao/Index';
import usuarioService from './../Services/UsuarioService';

const buscarTodosUsuarios = (user) => dispatch => {
    usuarioService.buscarTodosUsuarios()
        .then(response => {
            dispatch({
                type: USUARIO.DADOS_USER,
                payload: response.data
            });
        })
        .catch(erro => exibirMensagemErro(erro))
        .finally(

        )
}



export default {
    buscarTodosUsuarios,
}