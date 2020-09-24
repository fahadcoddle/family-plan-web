import * as types from 'actions';

const INITIAL_STATE = {
    user: null,
    error: null,
    loadings: false,
    children: [],
    coparents: [],
};

export default function (state = INITIAL_STATE, action) {

    let {user, error, children, coparents} = state;
    if(action.user){
       user = action.user;
    }else if(action.children){
        children = action.children;
    }else if(action.coparents){
        coparents = action.coparents;
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
        case types.GET_CHILDREN_SUCCESS:
            return {...state, children};
        case types.GET_COPARENTS_SUCCESS:
            return {...state, coparents};
        default:
            return state;
    }
}
