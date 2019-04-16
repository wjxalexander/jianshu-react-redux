import React, { Component, Fragment } from "react";
import { HomeWarpper, HomeLeft, HomeRight } from "./style.js";
import { List, Recommend, Topic, ç } from "./components";
import {connect} from 'react-redux'
class Home extends Component {
  render() {
    return (
      <HomeWarpper className="clearfix">
        <HomeLeft>
          <img
            className="banner-image"
            src="https://edu-image.nosdn.127.net/e589b93759374dea94fdc5bea7be0e57.png?imageView&quality=100"
            alt="banner-image"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Recommend />
        </HomeRight>
      </HomeWarpper>
    );
  }
}


export default Home;
