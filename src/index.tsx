import React from "react";
import ReactDOM from "react-dom";
// import logger from "redux-logger";
import {
  createStore,
  // applyMiddleware
} from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import * as serviceWorker from "./service-worker.js";
// import { fetchStaticFiles } from "./helpers";

import rootReducer from "./redux";

const store = createStore(rootReducer);
// const store = createStore(rootReducer, applyMiddleware(logger));

const showContent = () => {
  const loader = document.getElementById("loader");
  const body = document.querySelector("body");
  loader!.style.opacity = "0";
  setTimeout(() => {
    body!.style.overflowY = "scroll";
    loader!.style.display = "none";
  }, 300);
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register({ onSuccess: showContent });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
