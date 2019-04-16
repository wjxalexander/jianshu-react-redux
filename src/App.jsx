import React, { Component } from "react";
import { ResetStyle, GlobalStyle } from "./common/globalStyle";
import { Provider } from "react-redux";
import { IconfontStyle } from "./assets/iconfont/iconfont";
import Header from "./common/header";
import Store from "./store";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
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
            <Route exact path="/" component={Home} />
            <Route path="/detail" component={Detail} />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
