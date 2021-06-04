import { cancel, delay, fork, put, take, takeEvery } from 'redux-saga/effects';
import { autoIncrease,increase, stopAutoIncrease, asyncIncrease, decrease, asyncDecrease } from '../action/counter';


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

function* asyncIncreaseTask(){
    yield delay(2000);
    yield put(increase())
}

function* asyncDecreaseTask(){
    yield delay(2000);
    yield put(decrease())
}

export default function* counterTask() {
    yield fork(autoTask);
    yield takeEvery(asyncIncrease.toString(), asyncIncreaseTask)
    yield takeEvery(asyncDecrease.toString(), asyncDecreaseTask)
    console.log('正在监听autoIncrease');
}
