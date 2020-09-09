import * as types from './index';

export const getMeUserAction = (token) => {
    return {
        type: types.GET_USER,
        token,
    };
};




