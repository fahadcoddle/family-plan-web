import { put, call } from 'redux-saga/effects';
import { getMe } from 'services/userService';
import { getChildren } from 'services/memberService';
import { getCoParents } from 'services/coparentsService';

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

export function* getChildrenSaga(action){
    try {
        const children = yield call(getChildren, action);
        yield put({type: types.GET_CHILDREN_SUCCESS, children});

    } catch(error) {
        let err = {
            msg: 'Connection error - please try again, or check your internet connection.',
        };
        yield put({ type: types.GET_USER_ERROR, err });
    }
}

export function* getCoParentsSaga(action){
    try {
        const response = yield call(getCoParents, action);
        const coparents = [];
        const coParentsEmails = [];
        const coParentIds = [];
        for(let i = 0;i < response.length;i++){
            let coparent = response[i];
            
            if(coParentsEmails.indexOf(coparent.User.email) === -1 &&
                coParentIds.indexOf(coparent.User.id) === -1){
                coparents.push({
                    id: coparent.User.id,
                    is_registered: coparent.is_registered,
                    gender: coparent.gender || '',
                    name: coparent.User.first_name || coparent.User.last_name,
                    email: coparent.User.email,
                    invitationsIds: [],
                });
                coParentsEmails.push(coparent.User.email);
                coParentIds.push(coparent.User.id);
            } else {
                coparents.map((cp) => {
                    if (cp.email === coparent.User.email) {
                        cp.invitationsIds.push(coparent.id);
                    }
                });
            }
        }
        console.log('coparents', coparents);
        yield put({type: types.GET_COPARENTS_SUCCESS, coparents});

    } catch(error) {
        let err = {
            msg: 'Connection error - please try again, or check your internet connection.',
        };
        yield put({ type: types.GET_USER_ERROR, err });
    }
}