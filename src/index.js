import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./Components/Redux/reduxStore";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTrees = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                <App />
                </StoreContext.Provider>
                </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireTrees(store.getState())
store.subscribe(()=>{
    let state=store.getState()
    rerenderEntireTrees(state)})
