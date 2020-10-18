import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import rota from './../Helpers/Const/Links'
import Menu from './../Components/MenuTopo/Menu';
import Perfil from './../Components/Perfil/Perfil';
import Login from './../Pages/Login/Login';
import Adicionar from './../Pages/Adicionar/Adicionar';
import Loading from './../Components/Carregando/Loading';
import pageNotFound from './../Pages/NotFound404/pageNotFound';
import Dashboard from './../Pages/Dashboard/Dashboard';
import CriarConta from './../Pages/CriarConta/CriarConta';
import Gerenciar from './../Pages/Gerenciar/Index'

const MainRoute = () => {

    return (
        < BrowserRouter >
            <Loading />
            <Menu />
            <Perfil />
            <Switch>
                <Route path='/' component={Dashboard} exact />
                <Route path={rota.login} component={Login} />
                <Route path={rota.Sugestões} component={Adicionar} />
                <Route path={rota.inicio} component={Dashboard} />
                <Route path={rota.novaConta} component={CriarConta} />
                <Route path={rota.Gerenciar} component={Gerenciar} />
                <Route path={rota.pageNotFound} component={pageNotFound} />
                <Redirect to={rota.pageNotFound} />
            </Switch>
        </BrowserRouter >
    );
}

export default MainRoute;
