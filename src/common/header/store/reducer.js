import * as actionTypes from "./actionTypes";
import { fromJS, toJS } from "immutable";
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1
});
// reducer's outPut is a pure function
export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // set：结合之前的值和设置的值返回一个全新的对象
    return state.set("focused", true);
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set("focused", false);
  }
  if (action.type === actionTypes.CHANGE_LIST) {
    // return state.set('list',action.data).set('totalPage', action.totalPage)
    return(
      state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    );
  }
  if (action.type === actionTypes.MOUSE_ENTER) {
    return state.set("mouseIn", true);
  }
  if (action.type === actionTypes.MOUSE_LEAVE) {
    return state.set("mouseIn", false);
  }
  if (action.type === actionTypes.CHANGE_PAGE) {
    console.log(state);
    return state.set("page", action.data);
  }
  return state;
};
