import React from 'react';
import { Row } from 'react-bootstrap';
import './Dashboard.css'
import GraficoPizzaGenerico from './../../Components/GraficoPizza/ContainerGrafico';
import GraficoBarra from './../../Components/GraficoBarra/ContainerGrafico';
import CardSugestao from './../../Components/CardSugestao/Index';

const Dashboard = () => {

    const dataPendente = [
        { porcentagem: '70', legenda: 'Solucionado' },
        { porcentagem: '30', legenda: 'Pendente' },
    ]

    const dataCategorias = [
        { porcentagem: '30', legenda: 'Adicionar' },
        { porcentagem: '10', legenda: 'Abandonar' },
        { porcentagem: '50', legenda: 'Melhorar' },
        { porcentagem: '10', legenda: 'Manter' },
    ]

    const dataSolucionado = []

    const dataGraficoBarra = [
        { votos: '50', titulo: 'Home office', tipo: '1' },
        { votos: '43', titulo: 'Game Changer', tipo: '2' },
        { votos: '41', titulo: 'Microsof Teams', tipo: '1' },
        { votos: '41', titulo: 'Água', tipo: '4' },
        { votos: '30', titulo: 'Hub Salvador', tipo: '2' },
        { votos: '29', titulo: 'Lixeira', tipo: '1' },
        { votos: '28', titulo: 'Mouse', tipo: '4' },
        { votos: '22', titulo: 'Cadeira', tipo: '4' },
        { votos: '20', titulo: 'Monitor', tipo: '1' },
        { votos: '18', titulo: 'Café', tipo: '2' },
    ]

    const usuario = { nome: 'Keven Pacheco Baraúna', cargo: 'Corder II', imagem: null, favoritos: [1, 3, 5] };

    const ticket = [
        { id: 1, titulo: 'Home office', descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s trys standard dummy text ever since the 1500 em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', data: '04/10/2020', votos: 1 },
        { id: 2, titulo: 'Game Changer', descricao: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.', data: '10/12/2020', votos: 0 },
        { id: 3, titulo: 'Microsof Teams', descricao: 'Lorem ing industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500ss', data: '05/08/2020', votos: 6 },
        { id: 4, titulo: 'Água', descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500ss', data: '01/01/2021', votos: 10 },
        { id: 5, titulo: 'Hub Salvador', descricao: '', data: '12/10/2020', votos: 1 },
        { id: 6, titulo: 'Lixeira', descricao: 'O cuidado em identificar pontos críticos na adoção de políticas descentralizadoras estimula a padronização dos níveis de motivação departamental.', data: '04/10/2021', votos: 35 },

    ]



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
            {ticket.map((item, index) => (
                <CardSugestao
                    key={index}
                    usuario={usuario}
                    ticket={item}
                />
            ))}
        </>
    );
}

export default Dashboard;