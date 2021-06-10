import { getSearchStudents } from '../services/student';
import { routerRedux } from 'dva';

export default {
    state: {
        condition: {
            sex: -1,
            page: 1,
            limit: 10,
            key: ''
        },
        result: {
            datas: [],
            total: 0
        }
    },
    reducers: {
        changeCondition(state, { payload }) {
            return {
                ...state,
                condition: {
                    ...state.condition,
                    ...payload
                }
            };
        },
        setResult(state, { payload }) {
            return {
                ...state,
                result: payload
            };
        }
    },
    effects: {
        *setCondition({ payload }, { put, select, call }) {
            yield put({ type: 'changeCondition', payload });
            const condition = yield select((state) => state.students.condition);
            yield put(
                routerRedux.push(
                    `?page=${condition.page}&limit=${condition.limit}&key=${condition.key}&sex=${condition.sex}`
                )
            );
        },
        *fetchStudents(action, { put, select, call }) {
            console.log('运行');
            const condition = yield select((state) => state.students.condition);
            console.log(condition);
            const result = yield call(getSearchStudents, condition);
            console.log(result);
            yield put({
                type: 'setResult',
                payload: {
                    total: result.cont,
                    datas: result.datas
                }
            });
        }
    },
    subscriptions: {
        listenUrl({history, dispatch}){
            history.listen(newLocation => {
                console.log(newLocation);
                if(newLocation.pathname !== '/student'){
                    return;
                }
                const query = newLocation.query;
                query.limit && (query.limit = +query.limit)
                query.page && (query.page = +query.page)
                query.sex && (query.sex = +query.sex)
                dispatch({type: 'changeCondition', payload: query});
                dispatch({type: 'fetchStudents'})
            })
        }
    }
};
