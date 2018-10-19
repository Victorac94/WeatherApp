import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import weatherReducer from './store/reducers/weather';
import watchWeather from './store/sagas/index.js';

// Si estamos en development mode entonces habilitamos la extension de chrome, sino usamos 'compose'
// process.env hace referencia a las variables de entorno de React
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  weather: weatherReducer
});

//Creamos el Saga Middleware
const sagaMiddleware = createSagaMiddleware();

//Añadimos el Saga Middleware al store
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

// Corremos en el sagaMiddleware el saga que hemos creado e importado.
// Estos sagas son los que ejecutan otros sagas cuando ciertas acciones son despachadas en la aplicación.
sagaMiddleware.run(watchWeather);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render( app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
