import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase'
import makeRootReducer from './reducers';

const fbConfig = {
    apiKey: "AIzaSyBzyxfWMIgHF3_Zmhf92e4w5ItCFqyV-m8",
    authDomain: "crwn-db-ec285.firebaseapp.com",
    databaseURL: "https://crwn-db-ec285.firebaseio.com",
    projectId: "crwn-db-ec285",
    storageBucket: "crwn-db-ec285.appspot.com",
    messagingSenderId: "1011339584497",
    appId: "1:1011339584497:web:18d33033d32ed6d76f1a50",
    measurementId: "G-1S6QE4GTQ7"
} // your firebase config
const middlewares = [
  thunk.withExtraArgument(getFirebase)
]
const store = createStore(
  makeRootReducer(),
  initialState,
  compose(
    applyMiddleware(...middlewares),
  )
);