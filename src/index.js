import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import stoke from "./Redax/Stoke";




const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={stoke.getState()} dispatch={stoke.dispatch.bind(stoke)}  stoke={stoke}
                />
            </BrowserRouter>
        </React.StrictMode>
    )
}
rerenderEntireTree(stoke.getState())

stoke.encripted(rerenderEntireTree)
