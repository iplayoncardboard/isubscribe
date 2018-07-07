import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Auth from './Auth'

const auth = new Auth();

let state = {};

window.setState = (changes) => {
    state = Object.assign({}, state, changes);
    
    ReactDOM.render(<App {...state} />, document.getElementById("root"));
    console.log(state);
}

let initialState = {name: "Log In", auth}

window.setState(initialState);