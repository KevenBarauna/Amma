import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './../Pages/Home/Home';

const MainRoute = () => {

    return (
        < BrowserRouter >
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path={'/home'} component={Home} />
                {/* <Route path={link.pageNotFound} component={Page404} /> */}
                {/* <Redirect to={link.pageNotFound} /> */}
            </Switch>
        </BrowserRouter >
    );
}

export default MainRoute;
