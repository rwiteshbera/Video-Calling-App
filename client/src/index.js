import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";
import { ContextProvider } from "./Context";
import "./style.css";

ReactDOM.render(
  <>
    <ContextProvider>
      <App />
    </ContextProvider>
  </>,
  document.getElementById("root")
);
