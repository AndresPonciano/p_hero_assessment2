import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Router from './components/Router';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Router />
    </Provider>,
    document.querySelector('#root')
);
