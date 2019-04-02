import { combineReducers } from 'redux-immutable';
import { reducer as headReducer} from '../common/header/store';

// combine fragment reducer  immutable 数据内容
export default combineReducers({
   header: headReducer // head 是个包裹器
})

