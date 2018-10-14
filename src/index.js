import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import Root from "./containers/Root";
import * as serviceWorker from './serviceWorker';
import store from "./store";

const history = createBrowserHistory();

ReactDOM.render(<Root store={store} history={history} />, document.getElementById("root"));

serviceWorker.unregister();
