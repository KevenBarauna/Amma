import { combineReducers } from 'redux';

import usuarioReducer from './UsuarioReducer';
import loadingReducer from './LoadingReducer';
import statusReducer from './StatusReducer';
import sugestaoReducer from './SugestaoReducer';
import modalReducer from './ModalReducer';
import categoriaReducer from './CategoiaReducer';

export default combineReducers({
    usuarioReducer: usuarioReducer,
    loadingReducer: loadingReducer,
    statusReducer: statusReducer,
    sugestaoReducer: sugestaoReducer,
    modalReducer: modalReducer,
    categoriaReducer: categoriaReducer,
})