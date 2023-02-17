import App from './App'
import ReactDOM from "react-dom/client";
import React from 'react'

it('render with out crashing',()=>{
    const div=document.createElement('div')
    ReactDOM.render(<App/>,div)
    ReactDOM.unmountComponentAtNode(div)
})