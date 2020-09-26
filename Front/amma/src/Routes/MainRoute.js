import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import rota from './../Helpers/Const/Links'
import Menu from './../Components/MenuTopo/Menu';
import Perfil from './../Components/Perfil/Perfil';
import Home from './../Pages/Home/Home';
import Login from './../Pages/Login/Login';
import Adicionar from './../Pages/Adicionar/Adicionar';
import Loading from './../Components/Carregando/Loading';

const MainRoute = () => {

    return (
        < BrowserRouter >
            <Loading />
            <Menu />
            <Perfil />
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path={rota.home} component={Home} />
                <Route path={rota.login} component={Login} />
                <Route path={rota.Sugestões} component={Adicionar} />
                <Route path={rota.pageNotFound} component={Loading} />
                <Redirect to={rota.pageNotFound} />
            </Switch>
        </BrowserRouter >
    );
}

export default MainRoute;
