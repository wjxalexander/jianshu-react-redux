import React, { Component } from 'react';
import {ResetStyle, GlobalStyle} from './common/globalStyle'
import {IconfontStyle} from './assets/iconfont/iconfont'
import Header from "./common/header"
class App extends Component {
  render() {
    return (
      <div>
        <ResetStyle />
        <GlobalStyle />
        <IconfontStyle />
        <Header />
      </div>
    );
  }
}

export default App;
