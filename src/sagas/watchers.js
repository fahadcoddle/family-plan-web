import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from 'sagas/authenticationSaga';
import { getMeSaga, getChildrenSaga, getCoParentsSaga } from 'sagas/userSaga';
import { loaderSaga } from 'sagas/loaderSaga';

import * as types from 'actions';

export default function* watchUserAuthentication() {
    yield takeLatest(types.REGISTER_USER, registerSaga);
    yield takeLatest(types.LOGIN_USER, loginSaga);
}

export function* watchGetMe() {
    yield takeLatest(types.GET_USER, getMeSaga);
}

export function* watchLoader() {
    yield takeLatest(types.ADD_LOADING, loaderSaga);
    yield takeLatest(types.REMOVE_LOADING, loaderSaga);
}

export function* watchGetChildren() {
    yield takeLatest(types.GET_CHILDREN, getChildrenSaga);
}

export function* watchGetCoParents() {
    yield takeLatest(types.GET_COPARENTS, getCoParentsSaga);
}