import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store";

import App from "App";
import Chat from "Modules/Chat/Chat";

function NoMatch() {
  return <Redirect to="/welcome" />;
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/welcome" component={App} />
        <Route path="/chat" component={Chat} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
