import React from 'react';
import GraficoPizzaGenerico from './GraficoPizza';
import './Grafico.css'

const ContainerGrafico = props => {
    const { dados, titulo } = props;

    return (
        <div className='grafico-pizza-container'>
            <GraficoPizzaGenerico
                dados={dados}
                titulo={titulo}
            />
        </div>

    );
}

export default ContainerGrafico;