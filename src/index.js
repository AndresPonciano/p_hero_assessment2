import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Router from './components/Router';
import {
    saveToLocalStorage,
    loadFromLocalStorage,
} from './modules/localstorage';

const persistedState = loadFromLocalStorage();

const store = createStore(reducers, persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.querySelector('#root')
);
