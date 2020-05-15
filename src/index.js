import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Css
import'./css/App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x
import 'jquery'
import 'popper.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);