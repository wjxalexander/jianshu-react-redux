import styled from "styled-components";
import logo from "../../assets/images/logo.png";
export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({
  href: "/"
})`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${logo});
  background-size: contain;
`;
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  &.clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "search"
})`
  &.focused {
    width: 240px;
  }
  &:focus {
    outline: none;
  }
  padding: 0 30px 0 20px;
  margin: 9px 0 0 20px;
  width: 160px;
  height: 38px;
  border: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  /* css transition */
  &.slide-enter {
    width: 160px;
    transition: all 0.5s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.5s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;
export const SearchInfro = styled.div`
  position: absolute;
  left: 20px;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  z-index:2;
  background: white
`;
export const SearchInfroTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfroSwitch = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: inline-block;
    font-size: 12px;
    margin-right: 2px;
    transition: all 200ms ease-in;
    transform-origin: center center;
  }

`;
export const SearchInfroList = styled.div`
  :after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
`;
export const SearchInfroItem = styled.a`
  font-size: 12px;
  line-height: 20px;
  padding: 0 5px;
  margin: 0 10px 10px 0;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #787878;
  display: block;
  float: left;
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  font-size: 17px;
  float: right;
  margin: 9px 20px 0 0;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.register {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`;
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    display: inline-block;
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;
export const ListInfo = styled.div`
`;
