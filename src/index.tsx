import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store/index'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/style.css';
import './index.css';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


