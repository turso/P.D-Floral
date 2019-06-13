import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import App from './App';
import { StoreProvider } from './Store';
import './i18n';

ReactDOM.render(
  <StoreProvider>
    <Normalize />
    <App />
  </StoreProvider>,
  document.getElementById('app')
);
