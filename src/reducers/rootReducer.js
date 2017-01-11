import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import titleReducer from './titleReducer';

export default combineReducers({
  titleReducer,
  counterReducer
});