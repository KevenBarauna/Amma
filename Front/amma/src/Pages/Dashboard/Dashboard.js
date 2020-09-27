import React from 'react';
import { Row } from 'react-bootstrap';
import './Dashboard.css'
import GraficoPizzaGenerico from './../../Components/GraficoPizza/ContainerGrafico';
import GraficoBarra from './../../Components/GraficoBarra/ContainerGrafico';

const Dashboard = () => {

    const dataPendente = [
        { porcentagem: '30', legenda: 'Pendente' },
        { porcentagem: '70', legenda: 'Solucionado' },
    ]

    const dataCategorias = [
        { porcentagem: '30', legenda: 'Adicionar' },
        { porcentagem: '10', legenda: 'Manter' },
        { porcentagem: '50', legenda: 'Melhorar' },
        { porcentagem: '10', legenda: 'Abandonar' }
    ]

    const dataSolucionado = []

    const dataGraficoBarra = [
        { votos: '50', titulo: 'Loren ipisum ', tipo: '1' },
        { votos: '43', titulo: 'Loren ipisum ', tipo: '2' },
        { votos: '41', titulo: 'Loren ipisum ', tipo: '1' },
        { votos: '41', titulo: 'Loren ipisum ', tipo: '4' },
        { votos: '30', titulo: 'Loren ipisum ', tipo: '2' },
        { votos: '29', titulo: 'Loren ipisum ', tipo: '1' },
        { votos: '28', titulo: 'Loren ipisum ', tipo: '4' },
        { votos: '22', titulo: 'Loren ipisum ', tipo: '4' },
        { votos: '20', titulo: 'Loren ipisum ', tipo: '1' },
        { votos: '18', titulo: 'Loren ipisum ', tipo: '2' },
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
        </>
    );
}

export default Dashboard;