// import reducer from '../redux/reducer';
import isPlainObject from './utils/isPlainObject';
import ActionTypes from './utils/actionTypes';

function validateReducers(reducers) {
    if (typeof reducers !== 'object') {
        throw new TypeError('reducers must be a object');
    }
    if (!isPlainObject(reducers)) {
        throw new TypeError('reducer must be a plain object');
    }


    /** 
     * @@redux/INIT2.f.b.9.2.5
       @@redux/PROBE_UNKNOWN_ACTIONr.a.h.2.o.o
    */

    for (const key in reducers) {
        if (Object.hasOwnProperty.call(reducers, key)) {
            const reducer = reducers[key];
            let state = reducer(undefined, {
                type: ActionTypes.INIT()
            });
            if (state === undefined) {
                throw new TypeError('reducer must not return undefined');
            }
            state = reducer(undefined, {
                type: ActionTypes.UNKNOWN()
            });
            if (state === undefined) {
                throw new TypeError('reducer must not return undefined');
            }
        }
    }
}

/**
 *
 * @param {*} reducers
 */
export default function combineReducers(reducers) {
    validateReducers(reducers);
    return (state = {}, action) => {
        const newState = {};
        for (const key in reducers) {
            if (Object.hasOwnProperty.call(reducers, key)) {
                const reducer = reducers[key];
                newState[key] = reducer(state[key], action);
            }
        }
        return newState;
    };
}
