import React from "react";
import ReactDOM from "react-dom";
import "rsuite/dist/rsuite.min.css";
import "./index.css";
import App from "./App";
import { CustomProvider } from "rsuite";

ReactDOM.render(
  <React.StrictMode>
    <CustomProvider theme="dark">
      <App />
    </CustomProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
