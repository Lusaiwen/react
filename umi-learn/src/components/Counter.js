import React from 'react';
import { connect } from 'umi';
import counterStyle from '@/assets/css/counter.less'
console.log(counterStyle);

function Counter({ number, onIncrease, onDecrease, onAsyncIncrease, onAsyncDecrease }) {
  return (
    <div>
      <h1 className={counterStyle.counter}>计数器</h1>
      <h1 className={counterStyle.title}>{number}</h1>
      <button onClick={onAsyncIncrease}>异步加</button>
      <button onClick={onIncrease}>加</button>
      <button onClick={onDecrease}>减</button>
      <button onClick={onAsyncDecrease}>异步减</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  number: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrease() {
    dispatch({
      type: 'counter/increase',
    });
  },
  onDecrease() {
    dispatch({ type: 'counter/decrease' });
  },
  onAsyncIncrease(){
      dispatch({type: 'counter/asyncIncrease'})
  },
  onAsyncDecrease(){
      dispatch({type: 'counter/asyncDecrease'})
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
