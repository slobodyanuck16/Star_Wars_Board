import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const rootElem = document.querySelector("#root");

ReactDOM.render(
    <Router>
        <App />
    </Router>,

    rootElem
);
