import { TICKET } from "./../Helpers/Const/ActionType";

const INITIAL_STATE = {
  tiposTicket: [],
};

export default function TicketReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TICKET.TIPO_TICKET:
      return {
        ...state,
        tiposTicket: action.payload,
      };

    default:
      return state;
  }
}
