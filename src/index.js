import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let DialogsData = [
    {name: 'Ruslan', id: 1},
    {name: 'Ludmila', id: 2},
    {name: 'Anna', id: 3},
    {name: 'Petr', id: 4},
    {name: 'Egor', id: 5},
    {name: 'Sergei', id: 6}
]
let MessagesData = [
    {message: 'Are you a football player?', id: 1},
    {message: 'Do you go to the cinema every week?', id: 2},
    {message: 'Does he work at the factory?', id: 3},
    {message: 'Did she live in Kyiv?', id: 4},
    {message: 'Will we go to the zoo?', id: 5},
    {message: 'She will go to school soon', id: 6}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App DialogsData={DialogsData} MessagesData={MessagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
