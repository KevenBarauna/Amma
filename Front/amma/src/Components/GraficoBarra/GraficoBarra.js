
import React, { useCallback } from 'react';
import { Bar } from 'react-chartjs-2';
import {coresTicketsPorId} from './../../Helpers/Const/appConst';

const GraficoBarra = props => {
    const { dados, titulo } = props;

    const descricao = [];
    const porcentagem = [];
    const coresPadrao = coresTicketsPorId
    const cores = [];


    const consultarDatos = useCallback(() => {
        if (dados?.length) {
            dados.forEach(item => {
                porcentagem.push(item.votos);
                const legenda = `${item.titulo} ${item.tipo}`;
                descricao.push(legenda);
                cores.push(coresPadrao[parseInt(item?.tipo) -1 ] || coresPadrao[4])
            });
            return {
                labels: descricao,
                datasets: [
                    {
                        data: porcentagem,
                        borderWidth: 1,
                        backgroundColor: cores,
                        borderColor: 'rgb(15, 255, 167)',
                        hoverBackgroundColor: 'rgb(210,100,130)',
                        hoverBorderColor: 'rgb(15, 163, 255)',
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
                    backgroundColor: coresPadrao[4],
                    hoverBackgroundColor: coresPadrao,
                },
            ],
        };
    }, [dados, coresPadrao, cores,descricao, porcentagem]);

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
                    display: false,
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
