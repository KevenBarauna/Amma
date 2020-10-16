import { GERENCIAR } from './../Helpers/Const/ActionType';

const INITIAL_STATE = {
    todosTickets: [],
};

export default function GerenciarReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GERENCIAR.TODOS_TICKETS:
            return {
                ...state,
                todosTickets: action.payload
            };

        default:
            return state;
    }
};