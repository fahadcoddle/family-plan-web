import * as types from 'actions';


export default function (state = [], action) {

    let user, error;
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
        default:
            return state;
    }
}
