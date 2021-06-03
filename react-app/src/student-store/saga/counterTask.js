import { cancel, delay, fork, put, take } from 'redux-saga/effects';
import { actionTypes, increase } from '../action/counter';

let isStop = false;

/**
 *流程控制
 *
 */
function* autoTask() {
    yield take(actionTypes.autoIncrease);
    const task = yield fork(function* () {
        while (true) {
            yield delay(2000);
            yield put(increase());
        }
    });
    yield take(actionTypes.stopAutoIncrease);
    yield cancel(task);
}

export default function* counterTask() {
    yield fork(autoTask);
    console.log('正在监听autoIncrease');
}
