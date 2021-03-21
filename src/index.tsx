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
import { fetchEssentialAssets, fetchAllAssets } from "./helpers";

import rootReducer from "./redux";

const store = createStore(rootReducer);
// const store = createStore(rootReducer, applyMiddleware(logger));

const showContent = (noFetch?: boolean) => {
  const hideLoader = () => {
    const loader = document.getElementById("loader");
    const body = document.querySelector("body");
    loader!.style.opacity = "0";
    setTimeout(() => {
      body!.style.overflowY = "auto";
      loader!.style.display = "none";
    }, 300);
  };
  if (!noFetch)
    fetchEssentialAssets()
      .then(() => {
        hideLoader();
        fetchAllAssets();
      })
      .catch(hideLoader);
  if (noFetch) hideLoader();
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register({
  onSuccess: () => showContent(),
  onUpdate: () => showContent(),
  onNoSw: () => showContent(true),
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
