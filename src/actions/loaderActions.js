import * as types from './index';

export function addLoading() {
    return {
      type: types.ADD_LOADING,
    };
}

export function removeLoading() {
    return {
      type: types.REMOVE_LOADING,
    };
}