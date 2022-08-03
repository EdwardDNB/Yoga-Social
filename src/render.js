import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  {addPost} from "./Components/Redux/State";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTrees = (State) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App State={State} addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

