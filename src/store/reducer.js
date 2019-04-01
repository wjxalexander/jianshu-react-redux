import { combineReducers } from 'redux';
import { reducer  as headReducer} from '../common/header/store';

// combine fragment reducer
export default combineReducers({
   header: headReducer // head 是个包裹器
})

