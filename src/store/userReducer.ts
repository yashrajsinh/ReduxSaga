import { SET_USER_NAME } from './userAction';

const initialState = {
  name: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
