import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./views/client/common/globalStyle/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </Router>
  </React.StrictMode>
);
