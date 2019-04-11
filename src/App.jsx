import React, { Component } from "react";
import { ResetStyle, GlobalStyle } from "./common/globalStyle";
import { Provider } from "react-redux";
import { IconfontStyle } from "./assets/iconfont/iconfont";
import Header from "./common/header";
import Store from "./store";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={Store}>
          <ResetStyle />
          <GlobalStyle />
          <IconfontStyle />
          <Header />
          <Router>
            <Route exact path = '/' render = {()=><div>home</div>}></Route>
            <Route path = '/detail' render = {()=><div>detail</div>}></Route>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
