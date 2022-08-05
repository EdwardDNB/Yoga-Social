import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, changePost, subscribe} from "./Components/Redux/State";
import {BrowserRouter} from "react-router-dom";
import State from "./Components/Redux/State";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTrees = () => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App State={State} addPost={addPost} changePost={changePost}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireTrees(State)
subscribe(rerenderEntireTrees)



