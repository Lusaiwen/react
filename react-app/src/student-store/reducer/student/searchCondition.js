import { actionTypes } from '../../action/student/searchCondition';

const initState = {
    sex: -1,
    page: 1,
    size: 10,
    search: ''
};

/**
 *控制查询条件的reducer
 * @export
 * @param {*} state
 * @param {*} action
 */
export default function reducer(state = initState, { type, payload }) {
    switch (type) {
        case actionTypes.change:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
}
