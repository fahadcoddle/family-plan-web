import { put, call } from 'redux-saga/effects';

import * as types from 'actions';

export function* loaderSaga(action) {
    try {
        if(action.type == 'ADD_LOADING'){
            yield put({ type: types.ADD_LOADING_SUCCESS});
        }else if(action.type == 'REMOVE_LOADING'){
            yield put({type: types.REMOVE_LOADING_SUCCESS});
        }
    } catch (error) {
        
        let err = {
            msg: 'Connection error - please try again, or check your internet connection.',
        };

        yield put({ type: types.GET_USER_ERROR, err });
    }
}
