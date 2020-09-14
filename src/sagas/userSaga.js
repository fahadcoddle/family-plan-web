import { put, call } from 'redux-saga/effects';
import { getMe } from 'services/userService';

import * as types from 'actions';

export function* getMeSaga(action) {
    try {
        const user = yield call(getMe, action);
        console.log('user',user);
        yield put({ type: types.GET_USER_SUCCESS, user });
    } catch (error) {
        
        let err = {
            msg: 'Connection error - please try again, or check your internet connection.',
        };

        yield put({ type: types.GET_USER_ERROR, err });
    }
}
