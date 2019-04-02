import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';
const defaultState = fromJS({
    focused: false,
 });
 // reducer's outPut is a pure fuction
 export default (state = defaultState, action) => {
    if(action.type === actionTypes.SEARCH_FOCUS){
       // set：结合之前的值和设置的值返回一个全新的对象
       return state.set('focused',true) 
    }
    if(action.type === actionTypes.SEARCH_BLUR){
      return state.set('focused',false) 
    }
    return state;
 };