import { combineReducers } from 'redux-immutable';
import { reducer as headReducer} from '../common/header/store';
import { reducer as homeReducer} from '../pages/home/store';

// combine fragment reducer  immutable 数据内容
export default combineReducers({
   header: headReducer, // head 是个包裹器
   home: homeReducer
})

