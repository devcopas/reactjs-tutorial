import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import mainReducer from "./redux/reducer/globalReducer";
import Home from "./container/Home/Home";

//* Store
const mainStore = createStore(mainReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={mainStore}>
            <Home />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
