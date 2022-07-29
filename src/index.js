import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let PostData = [
    {message: 'How are you?', likeCounts: 0},
    {message: 'Do you one a party??', likeCounts: 10}
]
let DialogsData = [
    {name: "Oksana", id: 1},
    {name: 'Oleg', id: 2},
    {name: 'Yan', id: 3},
    {name: 'Inna', id: 4},
    {name: 'Nikita', id: 5},
    {name: 'Snejana', id: 6},
]
let MessageData = [
    {message: "Are you happy today?", id: 1},
    {message: "Did you have fun at the party.", id: 2},
    {message: "Will you come to class tomorrow?", id: 3},
    {message: "Where are you from?", id: 4},
    {message: "What did you do on Saturday evening?", id: 5},
    {message: "Why was the class difficult?", id: 6},
]
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App PostData={PostData} DialogsData={DialogsData} MessageData={MessageData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
