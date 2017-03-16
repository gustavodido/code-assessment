import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import RootReducer from './reducers/RootReducer'

import App from './components/App/App';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

let store = createStore(RootReducer)

ReactDOM.render(
   <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
