import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./Components/Redux/Store";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTrees = (state) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireTrees(store.getState())
store.subscribe(rerenderEntireTrees)



