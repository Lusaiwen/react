


export const actionTypes = {
    change: Symbol('change')
}

export function changeCondition(newCondition){
    return {
        type: actionTypes.change,
        payload: newCondition
    }
}

