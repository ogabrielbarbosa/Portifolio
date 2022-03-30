import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { registerServiceWorker } from './serviceWorker'

registerServiceWorker();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);