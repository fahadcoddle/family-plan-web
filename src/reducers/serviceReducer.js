import * as types from 'actions';

export default function (state = [], action) {
    const user = action.user;
    switch (action.type) {
        case types.GET_USER_SUCCESS:
            return { ...state, user };
        case types.GET_USER_ERROR:
            return { ...state, user };
        default:
            return state;
    }
}
