import * as actionTypes from "./actionTypes";
import axios from "axios";
import { fromJS } from "immutable";

const getHomeList = data => ({
  type: actionTypes.GET_HOMELIST,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommendList: fromJS(data.recommendList)
});

export const getList = () => {
  return dispatch => {
    axios
      .get("/api/home.json")
      .then(res => {
        const { data:{data} } = res;
        console.log(data,'ewrqwr')
        dispatch(getHomeList(data));
      })
      .catch(erro => {
        console.log(erro);
      });
  };
};
