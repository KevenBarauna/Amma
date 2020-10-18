import React from 'react';
import GraficoBarra from './GraficoBarra';
import './Grafico.css'

const ContainerGrafico = props => {
    const { dados, titulo } = props;

    return (
        <div className='grafico-barra-container'>
            <GraficoBarra
                dados={dados}
                titulo={titulo}
            />
        </div>

    );
}

export default ContainerGrafico;