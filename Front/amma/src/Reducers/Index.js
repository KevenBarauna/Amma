import { combineReducers } from 'redux';

import usuarioReducer from './UsuarioReducer';
import loadingReducer from './LoadingReducer';
import TicketReducer from './TicketReducer';

export default combineReducers({
    usuarioReducer: usuarioReducer,
    loadingReducer: loadingReducer,
    TicketReducer: TicketReducer,
})