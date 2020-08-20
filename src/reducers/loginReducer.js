import * as types from '../actions';

export default function(state = [], action) {
  const response = action.response;
  console.log('action', action);
  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      console.log('action',response)
      return { ...state, response };
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};