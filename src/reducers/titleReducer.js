import * as Types from '../constants/actionType';

export default function titleReducer(state = "Title",action){
  switch(action.type){
    case Types.UPDATE_TITLE:
      return action.title;
    default:
      return state;
  }
}

