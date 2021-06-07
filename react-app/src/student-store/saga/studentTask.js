import { takeEvery, put, call, select } from 'redux-saga/effects';
import {
    fetchStudents,
    setIsLoading,
    setStuAndTotal
} from '../action/student/searchResult';
import { getSearchStudents } from '../../services/student';
console.log(fetchStudents.toString());

function* fetchStudent() {
    console.log('监听到了');
    yield put(setIsLoading(true));
    //得到仓库的数据
    const condition = yield select(state => state.students.condition);

    //saga发现是一个promise，会等待返回结果
    const resp = yield call(getSearchStudents, condition);
    yield put(setStuAndTotal(resp.datas, resp.cont));
    yield put(setIsLoading(false));
}

export default function* studentTask() {
    yield takeEvery('FETCH_STUDENTS', fetchStudent);
    console.log('正在监听fetchStudent ...');
}
