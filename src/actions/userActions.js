import * as types from './index';

export const getMeUserAction = (token) => {
    return {
        type: types.GET_USER,
        token,
    };
};

export const getChildrenUserAction = () => {
    return {
        type: types.GET_CHILDREN,
    }
};


export const getCoParentsUserAction = () => {
    return {
        type: types.GET_COPARENTS,
    }
};

