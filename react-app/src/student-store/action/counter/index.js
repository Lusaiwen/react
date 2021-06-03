import { handleActions, combineActions } from 'redux-actions';

function createActions(actionMap) {
    const result = {};
    for (const prop in actionMap) {
        if (Object.hasOwnProperty.call(actionMap, prop)) {
            const payloadCreator = actionMap[prop];
            const newName = toSmall(prop);

            const actionCreator = (...args) => {
                if (typeof payloadCreator === 'function') {
                    return {
                        type: prop,
                        payload: payloadCreator(...args)
                    };
                } else {
                    return {
                        type: prop
                    };
                }
            };

            actionCreator.toString = function () {
                return prop;
            };
            result[newName] = actionCreator;
        }
    }
    return result;
}
function toSmall(str) {
    return str
        .split('_')
        .map((s, i) => {
            s = s.toLowerCase();
            if (i !== 0 && s.length > 0) {
                s = s[0].toUpperCase() + s.substr(1);
            }
            return s;
        })
        .join('');
}

export const {
    increase,
    decrease,
    asyncIncrease,
    asyncDecrease,
    autoIncrease,
    stopAutoIncrease,
    add
} = createActions({
    INCREASE: () => 1,
    DECREASE: () => -1,
    ASYNC_INCREASE: null,
    ASYNC_DECREASE: null,
    AUTO_INCREASE: null,
    STOP_AUTO_INCREASE: null,
    ADD: (number) => number
});

export default handleActions(
    {
        [combineActions(increase, decrease, add)]: (state, action) =>
            state + action.payload
    },
    5
);
