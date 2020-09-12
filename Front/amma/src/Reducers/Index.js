import { combineReducers } from 'redux';

import usuarioReducer from './UsuarioReducer';
import loadingReducer from './LoadingReducer';

export default combineReducers({
    usuarioReducer: usuarioReducer,
    loadingReducer: loadingReducer,
})