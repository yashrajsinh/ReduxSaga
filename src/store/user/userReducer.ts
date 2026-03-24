import { SET_USER_NAME_SUCCESS } from './userAction';
import { DEACTIVE_USER } from './userAction';

const initialState = {
  name: '',
};

export const userReducer = (
  state = initialState,
  action: { type: string; payload?: any },
) => {
  switch (action.type) {
    case SET_USER_NAME_SUCCESS:
      return {
        ...state,
        name: action.payload,
      };
    case DEACTIVE_USER:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
