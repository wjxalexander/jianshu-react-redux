import React from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfro,
  SearchInfroTitle,
  SearchInfroSwitch,
  SearchInfroItem,
  SearchInfroList
} from "./style";
import { connect } from "react-redux"; // connect with Provider in App component
import cls from "classnames";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";

const getListArea = show => {
  if (show) {
    return (
      <SearchInfro>
        <SearchInfroTitle>
          热门搜索
          <SearchInfroSwitch>换一换</SearchInfroSwitch>
        </SearchInfroTitle>
        <SearchInfroList>
          <SearchInfroItem>教育</SearchInfroItem>
          <SearchInfroItem>教育</SearchInfroItem>
          <SearchInfroItem>教育</SearchInfroItem>
          <SearchInfroItem>教育</SearchInfroItem>
          <SearchInfroItem>教育</SearchInfroItem>
          <SearchInfroItem>教育</SearchInfroItem>
          <SearchInfroItem>教育</SearchInfroItem>
        </SearchInfroList>
      </SearchInfro>
    );
  } else {
    return null;
  }
};

const Header = props => {
  return (
    <div>
      <HeaderWrapper>
        <Logo />
        <Nav className="clearfix">
          <NavItem className="left active"> 首页 </NavItem>
          <NavItem className="left"> 下载App</NavItem>
          <NavItem className="right"> 登陆 </NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={props.focused} // true of false 控制
              timeout={500}
              classNames="slide"
            >
              <NavSearch
                className={props.focused ? "focused" : ""}
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputBlur}
              />
            </CSSTransition>
            <span className={cls("iconfont", props.focused ? "focused" : "")}>
              &#xe623;
            </span>
            {getListArea(props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing">
            <span className="iconfont">&#xe61c;</span>
            写文章
          </Button>
          <Button className="register">注册</Button>
        </Addition>
      </HeaderWrapper>
    </div>
  );
};

// return Object, Map the in state in store to the props of this component
const mapStateToProps = state => {
  //state is the state in Store
  return {
    focused: state.getIn(["header", "focused"])
    // equal state.get(header).get('focused')
    // state 也是immutable 了
  };
};

const mapDispatchToProps = dispatch => {
  //state is the state in Store
  return {
    handleInputFocus() {
      dispatch(actionCreators.SearchFocus()); // 需要括号
    },
    handleInputBlur() {
      dispatch(actionCreators.SearchBlur());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
