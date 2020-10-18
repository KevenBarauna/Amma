import { combineReducers } from 'redux';

import usuarioReducer from './UsuarioReducer';
import loadingReducer from './LoadingReducer';
import ticketReducer from './TicketReducer';
import gerenciarReducer from './GerenciarReducer';

export default combineReducers({
    usuarioReducer: usuarioReducer,
    loadingReducer: loadingReducer,
    ticketReducer: ticketReducer,
    gerenciarReducer: gerenciarReducer,
})