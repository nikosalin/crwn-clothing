import {createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';

import {logger} from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [];

//tha emfanizei minimata warnings errors mono otan to anoigw sto development(localost)
if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); // making our store persisted

export default {store, persistor};

//middlewares ousiastika functions pianoyn ta actions kai ta epistrefoun kai kanoun update to reducer