import { combineReducers } from 'redux';
import headReducer from '../common/header/store/reducer';

export default combineReducers({
   header: headReducer
})

