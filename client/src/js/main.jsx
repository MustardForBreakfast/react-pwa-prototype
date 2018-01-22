import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// include styles here so webpack can find 'em and bundle 'em up
import '../scss/main.scss';
import './vendor.js'; // vendor css is referenced here.

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}

ReactDOM.render(
  (<App />),
  document.getElementById('root'),
);
