import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';

import App from './components/App';
import Reducers from './reducers/Reducers'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

let store = createStore(Reducers, devToolsEnhancer())

ReactDOM.render(
   <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
