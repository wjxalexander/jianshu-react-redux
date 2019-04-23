// import * as actionTypes from "./actionTypes";
import { fromJS, toJS } from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
 topicList:[],
 articleList:[],
 recommendList:[]
});
// reducer's outPut is a pure function
export default (state = defaultState, action) => {
  switch (action.type) {
    case (actionTypes.GET_HOMELIST):
    console.log(action.topicList.toJS(),'ssASadsadwewqf')
       return (state.merge({
        topicList: action.topicList,
        articleList:action.articleList,
        recommendList:action.recommendList
       }))
    default:
      return state;
  }
};
