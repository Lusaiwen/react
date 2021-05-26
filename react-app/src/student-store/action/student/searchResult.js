import { getSearchStudents } from '../../../services/student';

export const actionTypes = {
    setStuAndTotal: Symbol('setStuAndTotal'),
    setIsLoading: Symbol('setIsLoading')
};

/**
 *设置学生数组和总数的action
 *
 * @export
 * @param {*} stus
 * @param {*} total
 * @returns
 */
export function setStuAndTotal(stus, total) {
    return {
        type: actionTypes.setStuAndTotal,
        payload: {
            datas: stus,
            total: total
        }
    };
}

/**
 *设置正在加载中的action
 *
 * @export
 * @param {*} isLoading
 * @returns
 */
export function setIsLoading(isLoading) {
    return {
        type: actionTypes.setIsLoading,
        payload: isLoading
    };
}

export function fetchStudents() {
    return async function (dispatch, getState, extra) {
        const condition = getState().students.condition;
        console.log(condition);
        dispatch(setIsLoading(true));
        const result = await getSearchStudents(condition);
        dispatch(setStuAndTotal(result.datas, result.cont));
        dispatch(setIsLoading(false));
    };
}
