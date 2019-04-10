import * as actionTypes from "./actionTypes";
import axios from "axios";
import { fromJS } from "immutable";

const changeList = data => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

const changePage = page =>({
  type: actionTypes.CHANGE_PAGE,
  data: fromJS(page)
})

export const SearchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const SearchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const getList = () => {
  return dispatch => {
    axios
      .get("/api/headList.json")
      .then(res => {
        const { data } = res;
        dispatch(changeList(data.data));
      })
      .catch(erro => {
        console.log(erro);
      });
  };
};
// thunk return时需要传入 dispatch
export const handleChangePage = (page)=>{
  return dispatch => dispatch(changePage(page))
}

export const mouseEnter = ()=>({
  type: actionTypes.MOUSE_ENTER
})
export const mouseLeave = ()=>({
  type: actionTypes.MOUSE_LEAVE
})
