import React, {useCallback,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardSugestao from './../../Components/CardSugestao/Index';
import gerenciarAction from './../../Actions/GerenciarAction';

const Gerenciar = () => {
    const dispatch = useDispatch()

    const usuario = useSelector(
        state => state.usuarioReducer.usuario
    );
    const todosTickets = useSelector(
        state => state.gerenciarReducer.todosTickets
    );

    
    const primeiroAcesso = useCallback(() => {
        dispatch(gerenciarAction.buscarTodosTickets());
    }, [dispatch]);
    useEffect(() => {
        primeiroAcesso();
    }, [primeiroAcesso]);

    const montarObjetoCard = () => {

    }

    return (
        <div >
            <h2>Aprove ou reprove os novos tickets</h2>
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