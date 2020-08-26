import { combineReducers } from 'redux';
import register from 'reducers/registerReducer';
import login from 'reducers/loginReducer';

const rootReducer = combineReducers({
    register,
    login,
});

export default rootReducer;
