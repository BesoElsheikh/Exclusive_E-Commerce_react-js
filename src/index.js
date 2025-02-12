import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
    <BrowserRouter>
      <Provider store={store}>
      <ToastContainer
     theme="light"
position="top-right"
autoClose={3000}
closeOnClick
pauseOnHover={false}
 />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
