import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import { searchCards, requestData } from "./reducers";
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({ searchCards, requestData });
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
