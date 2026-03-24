export const SET_USER_NAME_REQUEST = 'SET_USER_NAME_REQUEST';
export const SET_USER_NAME_SUCCESS = 'SET_USER_NAME_SUCCESS';
export const DEACTIVE_USER = 'DEACTIVE_USER';

// trigger saga
export const setUserName = (name: string) => ({
  type: SET_USER_NAME_REQUEST,
  payload: name,
});

// reducer will use this
export const setUserNameSuccess = (name: string) => ({
  type: SET_USER_NAME_SUCCESS,
  payload: name,
});

// null user
export const logOutUser = () => ({
  type: DEACTIVE_USER,
  payload: null,
});
