import React, {useCallback,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardSugestao from './../../Components/CardSugestao/Index';
import gerenciarAction from './../../Actions/GerenciarAction';
import './Gerenciar.css'

const Gerenciar = () => {
    const dispatch = useDispatch()

    const usuario = useSelector(
        state => state.usuarioReducer.usuario
    );
    const todosTickets = useSelector(
        state => state.gerenciarReducer.todosTickets
    );

    
    const primeiroAcesso = useCallback(() => {
        dispatch(gerenciarAction.buscarTodosTicketsPendentes());
    }, [dispatch]);
    useEffect(() => {
        primeiroAcesso();
    }, [primeiroAcesso]);

    const montarObjetoCard = () => {

    }

    return (
        <div >
            <h2 className='gerenciar-titulo'>Aprove ou reprove os novos tickets</h2>
            {todosTickets.map((ticket, index) => (
                <CardSugestao
                    key={index}
                    ticket={ticket}
                    usuario={usuario}
                    codRender={3}
                />
            ))}

        </div>
    );
}

export default Gerenciar;