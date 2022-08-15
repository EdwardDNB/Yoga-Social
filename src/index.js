import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./Components/Redux/reduxStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTrees = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireTrees(store.getState())
store.subscribe(()=>{
    let state=store.getState()
    rerenderEntireTrees(state)})
