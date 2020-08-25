import { fork } from 'redux-saga/effects';
import watchUserAuthentication from 'sagas/watchers';

export default function* startForman() {
    yield fork(watchUserAuthentication);
}
