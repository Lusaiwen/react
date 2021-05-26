


export const actionTypes = {
    change: Symbol('change')
}

export function changeAction(newCondition){
    return {
        type: actionTypes.change,
        payload: newCondition
    }
}

