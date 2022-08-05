import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {addPost, ChangePost} from './Redax/State'
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (State) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App State={State} addPost={addPost} ChangePost={ChangePost}/>
            </BrowserRouter>
        </React.StrictMode>
    )
}



