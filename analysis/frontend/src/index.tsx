import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App-google';
// import App from './components/App-gaode';
// import App from './App-deckGL.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  //  https://stackoverflow.com/a/72371185/9422455
  <React.Fragment>
    <App />
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
