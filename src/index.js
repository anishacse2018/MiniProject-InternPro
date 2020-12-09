import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Apps from './components/Apps';
import reportWebVitals from './reportWebVitals';
import Navbars from './components/Navbars';
//import serviceWorker from './components/serviceWorker';
ReactDOM.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);
//serviceWorker.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



