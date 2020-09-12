import { TICKET } from './../Helpers/Const/ActionType';
import { exibirDadosRedux } from './../Helpers/FuncaoPadrao/Index';

const INITIAL_STATE = {
    tipoTicket: [],
};

export default function TicketReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TICKET.TIPO_TICKET:
            exibirDadosRedux(action)
            return {
                ...state,
                tipoTicket: action.payload
            };
        default:
            return state;
    }
};