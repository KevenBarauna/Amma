import React from 'react';
import { useSelector } from 'react-redux';
import './Loading.css'

const Loading = () => {
    const exibirLoading = useSelector(
        state => state.loadingReducer.exibirLoading
    );

    return (
        exibirLoading === true ?
            <div className='loading-container'>
                <h1 className='loading-titulo'>Carregando..</h1>
            </div>
            : (null)
    );
}

export default Loading;