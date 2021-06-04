import React from 'react';
import store from '../student-store';
import {
    asyncIncrease,
    asyncDecrease,
    increase,
    decrease
} from '../student-store/action/counter';
import { connect } from 'react-redux';

function Counter(props) {
    return (
        <div>
            <div>{props.number}</div>
            <button onClick={props.onAsyncIncrease}>异步加</button>
            <button onClick={props.onIncrease}>加</button>
            <button onClick={props.onDecrease}>减</button>
            <button onClick={props.onAsyncDecrease}>异步减</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        number: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAsyncIncrease() {
            dispatch(asyncIncrease());
        },
        onAsyncDecrease() {
            dispatch(asyncDecrease());
        },
        onIncrease() {
            dispatch(increase());
        },
        onDecrease() {
            dispatch(decrease());
        }
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter);
