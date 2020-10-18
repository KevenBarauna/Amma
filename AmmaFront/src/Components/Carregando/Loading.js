import React from 'react';
import { useSelector } from 'react-redux';
import imagemLoading from './../../assets/image/loading.gif'
import './Loading.css'

const Loading = () => {
    const exibirLoading = useSelector(
        state => state.loadingReducer.exibirLoading
    );

    return (
        exibirLoading === true ?
            <div className='loading-container'>
                <div className='loading-container-imagem'>
                    <img className='loading-imagem' src={imagemLoading} alt='Ícone loading' />
                </div>
            </div>
            : (null)
    );
}

export default Loading;