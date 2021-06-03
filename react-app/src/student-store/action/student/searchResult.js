

export const actionTypes = {
    setStuAndTotal: Symbol('setStuAndTotal'),
    setIsLoading: Symbol('setIsLoading'),
    fetchStudents: Symbol('fetchStudents')
};

export function fetchStudents(){
    return {
        type: actionTypes.fetchStudents
    }
}


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
