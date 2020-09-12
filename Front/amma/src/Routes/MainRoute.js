import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './../Pages/Home/Home';
import Login from './../Pages/Login/Login';
import Loading from './../Components/Carregando/Loading';

const MainRoute = () => {

    return (
        < BrowserRouter >
            <Loading />
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path={'/home'} component={Home} />
                <Route path={'/login'} component={Login} />
                <Route path={'/404'} component={Loading} />
                <Redirect to={'/404'} />
            </Switch>
        </BrowserRouter >
    );
}

export default MainRoute;
