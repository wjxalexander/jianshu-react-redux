import React, { Component } from "react";
import { ResetStyle, GlobalStyle } from "./common/globalStyle";
import { Provider } from "react-redux";
import { IconfontStyle } from "./assets/iconfont/iconfont";
import Header from "./common/header";
import Store from "./store";

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={Store}>
          <ResetStyle />
          <GlobalStyle />
          <IconfontStyle />
          <Header />
        </Provider>
      </div>
    );
  }
}

export default App;
