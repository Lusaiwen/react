import { take, takeEvery } from 'redux-saga/effects';
import { actionTypes } from '../action/counter';

function* asyncIncrease() {
    console.log('asyncIncrease触发了');
}

function * asyncDecrease(){
    console.log('asyncDecrease触发了');
}

export default function* counterTask() {
    yield takeEvery(actionTypes.asyncIncrease, asyncIncrease);
    yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
    console.log('正在监听asyncIncrease, asyncDecreased');
}
