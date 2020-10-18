
import React, { useCallback } from 'react';
import {coresTickets} from './../../Helpers/Const/appConst';
import { Doughnut } from 'react-chartjs-2';

const GraficoPizzaGenerico = props => {
    const { dados, titulo } = props;

    const descricao = [];
    const porcentagem = [];
    const cor = coresTickets;


    const consultarDatos = useCallback(() => {
        if (dados?.length) {
            dados.forEach(item => {
                porcentagem.push(item.porcentagem);
                const legenda = `${item.legenda}`;
                descricao.push(legenda);
            });
            return {
                labels: descricao,
                datasets: [
                    {
                        data: porcentagem,
                        backgroundColor: cor,
                        hoverBackgroundColor: cor,
                    },
                ],
            };
        }
        porcentagem.push(100);
        descricao.push('Nenhum registro encontrado');
        return {
            labels: descricao,
            datasets: [
                {
                    data: porcentagem,
                    backgroundColor: cor[4],
                    hoverBackgroundColor: cor,
                },
            ],
        };
    }, [dados, cor, descricao, porcentagem]);

    return (
        <Doughnut
            height={300}
            options={{
                responsive: true,
                title: {
                    display: true,
                    text: titulo,
                    fontSize: 10,
                    padding: 1,
                },
                legend: {
                    labels: {
                        fontSize: 10,
                        padding: 5,
                        boxWidth: 20,
                    },
                    position: 'bottom',
                    align: 'center',
                    onHover(e) {
                        e.target.style.cursor = 'pointer';
                    },
                },
                maintainAspectRatio: false,
            }}
            data={consultarDatos}
        />
    );
};

export default GraficoPizzaGenerico;
