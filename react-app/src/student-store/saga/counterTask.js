import { cancel, delay, fork, put, take } from 'redux-saga/effects';
import { autoIncrease,increase, stopAutoIncrease } from '../action/counter';

let isStop = false;

/**
 *流程控制
 *
 */
function* autoTask() {
    yield take(autoIncrease.toString());
    const task = yield fork(function* () {
        while (true) {
            yield delay(2000);
            yield put(increase());
        }
    });
    yield take(stopAutoIncrease.toString());
    yield cancel(task);
}

export default function* counterTask() {
    yield fork(autoTask);
    console.log('正在监听autoIncrease');
}
