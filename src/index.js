import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Tables from './Tables.js';
// import Cards from './practice.js/practice1.js'
// import ConditionalRend from './practice.js/nov28.js'
// import MainComp from './practice.js/parent.js';
// import Fakestorecards from './practice.js/nov22.js'
// import Fakestoretables from './practice.js/nov221.js'
// import Resume from './practice.js/resume'
// import Bootstrap from './practice.js/cardboot.js'
import Acordian from './practice/accordean'

// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Tables/>
    {/* // <Cards/> */}
    {/* <Fakestorecards/> */}
    {/* <Fakestoretables/> */}
    {/* // <Resume/> */}
    <Acordian/>
    {/* <Bootstrap title="react" desc="its a js frontend libraray" info="click here"/> */}
    {/* <ConditionalRend isLoggedIn={false}/>
    <MainComp login="admin"/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
