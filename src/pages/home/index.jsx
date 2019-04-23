import React, { Component, Fragment } from "react";
import { HomeWarpper, HomeLeft, HomeRight } from "./style.js";
import { List, Recommend, Topic, ç } from "./components";
import {connect} from 'react-redux';
import { actionCreators } from "./store";
class Home extends Component {
  componentDidMount(){
    console.log('home',this.props)
    this.props.getHomeLists()
  }
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

const mapStateToProps = null;
const mapDispatchToProps = (dispatch)=>{
   return({
     getHomeLists(){
      dispatch(actionCreators.getList());
     }
   })
} 

export default connect(mapStateToProps,mapDispatchToProps)(Home);
