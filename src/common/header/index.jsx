import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from "./style";
import cls from "classnames";
import { CSSTransition } from "react-transition-group";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
  }
  handleInputFocus = () => {
    this.setState({
      focused: true
    });
  };
  handleInputBlur = () => {
    this.setState({
      focused: false
    });
  };
  render() {
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
                in={this.state.focused} // true of false 控制
                timeout={500}
                classNames="slide"
              >
                <NavSearch
                  className={this.state.focused ? "focused" : ""}
                  onFocus={this.handleInputFocus}
                  onBlur={this.handleInputBlur}
                />
              </CSSTransition>
              <span
                className={cls("iconfont", this.state.focused ? "focused" : "")}
              >
                &#xe623;
              </span>
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
  }
}

export default Header;
