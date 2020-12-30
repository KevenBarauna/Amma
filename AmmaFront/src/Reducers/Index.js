import { combineReducers } from 'redux';

import usuarioReducer from './UsuarioReducer';
import loadingReducer from './LoadingReducer';
import ticketReducer from './TicketReducer';
import sugestaoReducer from './SugestaoReducer';
import modalReducer from './ModalReducer';

export default combineReducers({
    usuarioReducer: usuarioReducer,
    loadingReducer: loadingReducer,
    ticketReducer: ticketReducer,
    sugestaoReducer: sugestaoReducer,
    modalReducer: modalReducer,
})