import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./styles.scss";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import { QueueProvider } from "./services/queueContext";

export const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <QueueProvider>
        <App />
      </QueueProvider>
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
