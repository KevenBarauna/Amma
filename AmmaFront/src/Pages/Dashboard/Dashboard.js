import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import usuarioAction from './../../Actions/UsuarioAction';
import ticketAction from './../../Actions/TicketAction';
import './Dashboard.css'
import GraficoPizzaGenerico from './../../Components/GraficoPizza/ContainerGrafico';
import GraficoBarra from './../../Components/GraficoBarra/ContainerGrafico';
import CardSugestao from './../../Components/CardSugestao/Index';

const Dashboard = () => {
    const dispatch = useDispatch();

    const dataPendente = useSelector(
        state => state.ticketReducer.graficoPendente
    );
    const dataCategorias = useSelector(
        state => state.ticketReducer.graficoCategorias
    );
    const dataSolucionado = useSelector(
        state => state.ticketReducer.graficoSolucionado
    );
    const dataGraficoBarra = useSelector(
        state => state.ticketReducer.graficoBarras
    );
    const ticketsFavoritos = useSelector(
        state => state.usuarioReducer.ticketsFavoritos
    );
    const todosTickets = useSelector(
        state => state.ticketReducer.novosTickets
    );
    const usuario = useSelector(
        state => state.usuarioReducer.usuario
    );

    const primeiroAcesso = useCallback(() => {
        dispatch(usuarioAction.buscarTicketsFavoritos());
        dispatch(ticketAction.buscarTiposTicket());
        dispatch(ticketAction.buscarGraficoPendente());
        dispatch(ticketAction.buscarGraficoCategorias());
        dispatch(ticketAction.buscarGraficoSolucionados());
        dispatch(ticketAction.buscarGraficoTopTicket());
        dispatch(ticketAction.buscarTickets());
    }, [dispatch]);
    useEffect(() => {
        primeiroAcesso();
    }, [primeiroAcesso]);


    return (
        <>
            <Row className='grafico-pizza-row'>
                <GraficoPizzaGenerico
                    dados={dataPendente}
                    titulo={'Pendente'}
                />
                <GraficoPizzaGenerico
                    dados={dataCategorias}
                    titulo={'Categorias'}
                />
                <GraficoPizzaGenerico
                    dados={dataSolucionado}
                    titulo={'Solucionados'}
                />
            </Row>
            <GraficoBarra
                dados={dataGraficoBarra}
                titulo={'Votos'}
            />
            {todosTickets.map((ticket, index) => (
                <CardSugestao
                    ticketsFavoritos={ticketsFavoritos}
                    ticket={ticket}
                    usuario={usuario}
                    codRender={1}
                />
            ))}
        </>
    );
}

export default Dashboard;