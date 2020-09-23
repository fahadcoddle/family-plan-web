import { fork } from 'redux-saga/effects';
import watchUserAuthentication from 'sagas/watchers';
import { watchGetMe, watchGetChildren, watchGetCoParents, watchLoader } from 'sagas/watchers';


export default function* startForman() {
    yield fork(watchUserAuthentication);
    yield fork(watchGetMe);
    yield fork(watchGetChildren);
    yield fork(watchGetCoParents);
    yield fork(watchLoader);
}
