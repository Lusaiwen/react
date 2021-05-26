import { actionTypes } from '../../action/student/searchResult';

const initState = {
    datas: [],
    total: 0,
    isLoading: false
};

/**
 *控制查询结果的reducer
 *
 * @export
 * @param {*} state
 * @param {*} action
 */
export default function reducer(state = initState, { type, payload }) {
    switch (type) {
        case actionTypes.setStuAndTotal:
            return {
                ...state,
                ...payload
            };
        case actionTypes.setIsLoading:
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state;
    }
}
