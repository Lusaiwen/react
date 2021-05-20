import isPlainObject from './utils/isPlainObject';
import ActionTypes from './utils/actionTypes';

/**
 * 创建createStore
 * @param {fucntion} reducer
 * @param {any} defaultState
 */
export default function createStore(reducer, defaultState) {
    let currentReducer = reducer,
        currentState = defaultState;
    const listeners = [];
    function dispatch(action) {
        if (!isPlainObject(action)) {
            throw new TypeError('action must be a plain object');
        }

        if (action.type === undefined) {
            throw new TypeError('action must have a property of type');
        }
        currentState = currentReducer(currentState, action);

        for (const listener of listeners) {
            listener();
        }
    }

    function getState() {
        return currentState;
    }

    /**
     * 创建监听器
     * @param {*} listener
     */
    function subscribe(listener) {
        listeners.push(listener);
        let isRemove = false;
        return () => {
            if (isRemove) {
                return;
            }
            const index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        };
    }

    //创建仓库时，需要分发一次初始的action
    dispatch({
        type: `@@redux/INIT${ActionTypes.INIT(6)}`
    });

    return {
        dispatch,
        getState,
        subscribe
    };
}
