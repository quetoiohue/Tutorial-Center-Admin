/**
 * Create React App entry point. This and `public/index.html` files can not be
 * changed or moved.
 */
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import ReactDOM from "react-dom";
// import "./sass/style.react.rtl.css"; // RTL version
import "socicon/css/socicon.css";
import App from "./App";
import store, { persistor } from "./app/store/store";
import "./index.scss"; // Standard version
import "./_metronic/_assets/plugins/flaticon/flaticon.css";
import "./_metronic/_assets/plugins/flaticon2/flaticon.css";
import "./_metronic/_assets/plugins/line-awesome/css/line-awesome.css";

ReactDOM.render(
  <App
    store={store}
    persistor={persistor}
  />,
  document.getElementById("root")
);
