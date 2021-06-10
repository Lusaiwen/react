import { delay} from '../utils/tools'

export default {
    state: null,
    reducers: {
        setLoginUser(state, { payload }) {
            return payload;
        }
    },
    effects: {
        *login({ payload }, { put, call }) {
            const { loginId, loginPwd } = payload;
            console.log(loginId, loginPwd);
            if (loginId === 'admin' && loginPwd === '123123') {
                yield call(delay, 2000);
                yield put({ type: 'setLoginUser', payload: loginId });
                localStorage.setItem('loginId', loginId);
                return true;
            }
            return false;
        },
        *loginOut(action, { put }) {
            yield put({ type: 'setLoginUser', payload: null });
            localStorage.removeItem('loginId');
        }
    },
    subscriptions: {
        syncLocalstorage({dispatch}) {
            const loginId = localStorage.getItem('loginId');
            if(loginId){
                dispatch({type: 'setLoginUser', payload: loginId})
            }
        }
    },
    
};