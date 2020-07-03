import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;