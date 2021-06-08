const model = {
    namespace: 'counter',
    state: 0,
    reducers: {
        increase(state) {
            return state + 1;
        },
        decrease(state) {
            return state - 1;
        },
        add(state, { payload }) {
            console.log(payload);
            return state + payload;
        }
    },
    effects: {
        *asyncIncrease(action, { call, put }) {
            yield call(delay, 2000);
            yield put({ type: 'increase' });
        },
        *asyncDecrease(action, { call, put }) {
            yield call(delay, 2000);
            yield put({ type: 'decrease' });
        }
    },
    subscriptions: {
        resizeWindow({ dispatch }) {
            window.onresize = () => {
                dispatch({ type: 'increase' });
            };
            console.log('窗口变化');
        }
    }
};

function delay(duration) {
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove();
        }, duration);
    });
}

export default model;
