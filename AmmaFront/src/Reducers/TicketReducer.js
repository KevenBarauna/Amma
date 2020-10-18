import { TICKET } from './../Helpers/Const/ActionType';
import { exibirDadosRedux } from './../Helpers/FuncaoPadrao/Index';

const INITIAL_STATE = {
    tipoTicket: [],
    graficoPendente: [],
    graficoCategorias: [],
    graficoSolucionado: [],
    graficoBarras: [],
    novosTickets: [],
};

export default function TicketReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TICKET.TIPO_TICKET:
            exibirDadosRedux(action)
            return {
                ...state,
                tipoTicket: action.payload
            };
        case TICKET.TICKET_GRAFICO_PENDENTE:
            exibirDadosRedux(action)
            return {
                ...state,
                graficoPendente: action.payload
            };
        case TICKET.TICKET_GRAFICO_CATEGORIA:
            exibirDadosRedux(action)
            return {
                ...state,
                graficoCategorias: action.payload
            };
        case TICKET.TICKET_GRAFICO_SOLUCIONADO:
            exibirDadosRedux(action)
            return {
                ...state,
                graficoSolucionado: action.payload
            };
        case TICKET.TICKET_GRAFICO_TOP_FAVORITOS:
            exibirDadosRedux(action)
            return {
                ...state,
                graficoBarras: action.payload
            };
        case TICKET.NOVOS_TICKETS:
            exibirDadosRedux(action)
            return {
                ...state,
                novosTickets: action.payload
            };
        default:
            return state;
    }
};