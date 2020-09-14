import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from 'sagas/authenticationSaga';
import { getMeSaga } from 'sagas/userSaga';

import * as types from 'actions';

export default function* watchUserAuthentication() {
    yield takeLatest(types.REGISTER_USER, registerSaga);
    yield takeLatest(types.LOGIN_USER, loginSaga);
}

export function* watchGetMe() {
    yield takeLatest(types.GET_USER, getMeSaga);
}