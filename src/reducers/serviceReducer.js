import * as types from 'actions';

const INITIAL_STATE = {
    user: null,
    error: null,
    loadings: false,
};

export default function (state = INITIAL_STATE, action) {

    let {user, error} = state;
    if(action.user){
       user = action.user;
    }else if(action.err){
        error = action.err;
    }
    switch (action.type) {
        case types.GET_USER_SUCCESS:
            return { ...state, user };
        case types.GET_USER_ERROR:
            return { ...state, error };
        case types.ADD_LOADING_SUCCESS:
            return {...state, loadings: true};
        case types.REMOVE_LOADING_SUCCESS:
            return {...state, loadings: false};
        default:
            return state;
    }
}
