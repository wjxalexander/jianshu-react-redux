import React, { Component, Fragment } from "react";
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
class Header extends Component {
  getListArea = () => {
    const {
      list,
      focused,
      mouseIn,
      page,
      totalPage,
      handleChangePage,
      handleMouseEnter,
      handleMouseLeave
    } = this.props;
    const newList = list.toJS();
    if (focused || mouseIn) {
      return (
        <SearchInfro
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfroTitle>
            热门搜索
            <SearchInfroSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <span
                ref={icon => (this.spinIcon = icon)}
                className={cls("iconfont", "spin", focused ? "focused" : "")}
              >
                &#xe7e5;
              </span>
              换一换
            </SearchInfroSwitch>
          </SearchInfroTitle>
          <SearchInfroList>
            {newList.length > 0
              ? newList.slice(page, page + 10).map((item, index) => {
                  return (
                    <SearchInfroItem key={`${item}-${index}-${Math.random()}`}>
                      {item}
                    </SearchInfroItem>
                  );
                })
              : ""}
          </SearchInfroList>
        </SearchInfro>
      );
    } else {
      return null;
    }
  };
  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
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
                in={focused} // true of false 控制
                timeout={500}
                classNames="slide"
              >
                <NavSearch
                  className={focused ? "focused" : ""}
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                />
              </CSSTransition>
              <span
                className={cls("iconfont", "zoom", focused ? "focused" : "")}
              >
                &#xe623;
              </span>
              {this.getListArea()}
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

// return Object, Map the in state in store to the this.props of this component
const mapStateToprops = state => {
  //state is the state in Store
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"])
    // equal state.get(header).get('focused')
    // state 也是immutable 了
  };
};

const mapDispatchToprops = dispatch => {
  //state is the state in Store
  return {
    handleInputFocus(list) {
      console.log(list);
      list.size === 0 && dispatch(actionCreators.getList());

      dispatch(actionCreators.SearchFocus()); // 需要括号
    },
    handleInputBlur() {
      dispatch(actionCreators.SearchBlur());
    },
    handleChangePage(page, totalPage, spin) {
      // 获取dom节点 ref
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle);
      } else {
        originAngle = 0;
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`;
      page < totalPage
        ? dispatch(actionCreators.handleChangePage(page + 1))
        : dispatch(actionCreators.handleChangePage(1));
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    }
  };
};
export default connect(
  mapStateToprops,
  mapDispatchToprops
)(Header);
