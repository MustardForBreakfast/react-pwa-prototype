import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '../scss/main.scss';

ReactDOM.render(
  (<App />),
  document.getElementById('root'),
);


// register service worker, if supported
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
