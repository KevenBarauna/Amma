
import React, { useCallback } from 'react';
import { Bar } from 'react-chartjs-2';

const GraficoBarra = props => {
    const { dados, titulo } = props;

    const descricao = [];
    const porcentagem = [];
    const cor = [
        '#216B47',
        '#91EEC1',
        '#49EB9C',
        '#416B57',
        '#39B87A',
        '#236B3F',
        '#96EEB8',
        '#4DEB8A',
        '#436B53',
        '#3CB86C'
    ];


    const consultarDatos = useCallback(() => {
        if (dados?.length) {
            dados.forEach(item => {
                porcentagem.push(item.votos);
                const legenda = `${item.titulo} ${item.tipo}`;
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
        <Bar
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

export default GraficoBarra;
