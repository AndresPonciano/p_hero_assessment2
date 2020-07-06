import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './components/Router';
import store from './modules/localstorage';
import './styles/index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.querySelector('#root')
);
