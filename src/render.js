import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, changePost} from "./Components/Redux/State";
import {BrowserRouter} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTrees = (State) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App State={State} addPost={addPost} changePost={changePost}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

