import React, { useRef } from 'react';
import { connect } from 'dva';

function Counter(props) {
    const inp = useRef();
    return (
        <div>
            <h1>{props.number}</h1>
            <button onClick={props.onAsyncIncrease}>异步加</button>
            <button onClick={props.onIncrease}>+</button>
            <button onClick={props.onDecrease}>-</button>
            <button onClick={props.onAsyncDecrease}>异步减</button>
            <p>
                <input type="number" ref={inp} />
                <button
                    onClick={() => {
                        console.log(inp.current.value);
                        const n = parseInt(inp.current.value);
                        props.onAdd && props.onAdd(n);
                    }}
                >
                    加上
                </button>
            </p>
        </div>
    );
}

const mapStateToProps = (state) => ({
    number: state.counter
});

const mapDispatchToProps = (dispatch) => ({
    onIncrease() {
        dispatch({
            type: 'counter/increase'
        });
    },
    onDecrease() {
        dispatch({
            type: 'counter/decrease'
        });
    },
    onAdd(n) {
        dispatch({
            type: 'counter/add',
            payload: n
        });
    },
    onAsyncIncrease() {
        dispatch({
            type: 'counter/asyncIncrease'
        });
    },
    onAsyncDecrease() {
        dispatch({
            type: 'counter/asyncDecrease'
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
