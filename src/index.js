import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import stoke from "./Redax/redaxStore";
import {Provider} from "./StoreContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = () => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
               <Provider stoke={stoke}>
                   <App/>
               </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}
rerenderEntireTree(stoke.getState())

stoke.subscribe(() => {
    let state = stoke.getState()
    rerenderEntireTree(state)
})
