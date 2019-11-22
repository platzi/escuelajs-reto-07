import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './routes/App';
import reducer from './reducers';
import Product2 from './assets/static/images/photos/tenis1.png';
import Product1 from './assets/static/images/photos/misterybox.png';
import Product3 from './assets/static/images/photos/jeans.jpg';
import Product4 from './assets/static/images/photos/sueter.jpg';

const initialState = {
  cart: [],
  products: [
    {
      "id": "1",
      "image": Product1,
      "title": "Suscripción Ventu Box",
      "description": "Mensualmente recibe productos solo para ti",
      "price": 800  
    },
    {
      "id": "2",
      "image": Product2,
      "title": "Tenis Marometta",
      "description": "bla bla bla bla bla",
      "price": 750  
    },
    {
      "id": "3",
      "image": Product3,
      "title": "Jeans IC",
      "description": "bla bla bla bla bla",
      "price":  500
    },
    {
      "id": "4",
      "image": Product4,
      "title": "Sueter Pue",
      "description": "bla bla bla bla bla",
      "price": 350  
    },
  ]
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);