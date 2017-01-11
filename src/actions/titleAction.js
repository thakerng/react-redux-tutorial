import * as Types from '../constants/actionType';

export const updateTitle = (title)=> ({
  type: Types.UPDATE_TITLE,
  title
});
