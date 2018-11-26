import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import configureStore from "./redux/configureStore";
import UserList from "./pages/UserList/UserList";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <BrowserRouter>
          <React.Fragment>
            <Route component={UserList} path="/" />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
