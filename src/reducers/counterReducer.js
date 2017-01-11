import * as Types from '../constants/actionType';

export default function counterReducer(state = 0 ,action){
  switch(action.type){
    case Types.COUNTER_INCREASE:
      return state+1;
    case Types.COUNTER_DECREASE:
    	return state-1;
    default:
      return state;
  }
}