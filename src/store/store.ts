import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { userReducer } from './user/userReducer';
import { saga } from './saga/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);
