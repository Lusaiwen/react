import React from 'react';
import { connect } from 'umi';
import counterStyle from '@/assets/css/counter.less'
console.log(counterStyle);

function Counter({ number, onIncrease, onDecrease }) {
  return (
    <div>
      <h1 className={counterStyle.counter}>计数器</h1>
      <h1 className={counterStyle.title}>{number}</h1>
      <button onClick={onIncrease}>加</button>
      <button onClick={onDecrease}>减</button>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
