// import { delay, put } from 'umi';

export default {
  state: 0,
  reducers: {
    increase(state) {
      return state + 1;
    },
    decrease(state) {
      return state - 1;
    },
  },
  effects: {
    *asyncIncrease() {
      //   yield delay(2000);
      //   yield put(increase());
    },
    *asyncDecrease() {
      //   yield delay(2000);
      //   yield put(decrease());
    },
  },
};
