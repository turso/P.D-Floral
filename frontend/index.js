import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Normalize } from 'styled-normalize';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Normalize />
    <App />
  </Provider>,
  document.getElementById('app')
);
