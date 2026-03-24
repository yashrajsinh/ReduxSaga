import { takeEvery, put } from 'redux-saga/effects';
import { SET_USER_NAME_REQUEST, setUserNameSuccess } from '../user/userAction';

function* handleSetUserName(action: any) {
  try {
    const name = action.payload;
    yield put(setUserNameSuccess(name)); // send to reducer
  } catch (error) {
    console.log(error);
  }
}

export function* saga() {
  yield takeEvery(SET_USER_NAME_REQUEST, handleSetUserName);
}
