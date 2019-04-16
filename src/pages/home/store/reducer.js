// import * as actionTypes from "./actionTypes";
import { fromJS, toJS } from "immutable";
const defaultState = fromJS({
  topicList: [
      {id:1,title:'社会热点',imgURL:"http://edu-image.nosdn.127.net/f51451ce40744c6a9e1eeaefd32c86f1.png?imageView&quality=100"},
      {id:2,title:'手绘',imgURL:"http://edu-image.nosdn.127.net/bbcc00726ec44a7fa72cfd7592009960.png?imageView&quality=100"}

  ]
});
// reducer's outPut is a pure function
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
