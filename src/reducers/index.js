import { combineReducers } from 'redux';
import register from 'reducers/registerReducer';
import login from 'reducers/loginReducer';
import serviceReducer from 'reducers/serviceReducer';

const rootReducer = combineReducers({
    register,
    login,
    serviceReducer,
});

export default rootReducer;
