import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './../Pages/Home/Home';
import Login from './../Pages/Login/Login';

const MainRoute = () => {

    return (
        < BrowserRouter >
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path={'/home'} component={Home} />
                <Route path={'/login'} component={Login} />
                {/* <Route path={link.pageNotFound} component={Page404} /> */}
                {/* <Redirect to={link.pageNotFound} /> */}
            </Switch>
        </BrowserRouter >
    );
}

export default MainRoute;
