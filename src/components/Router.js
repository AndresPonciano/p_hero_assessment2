import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import FavoriteList from './FavoriteList';
import NotFound from './NotFound';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/FavList" component={FavoriteList}></Route>
                <Route path="/404" component={NotFound}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
