import * as ActionTypes from './action-types'

export function getIncreaseAction(){
    return {
        type: ActionTypes.INCREASE
    }
}

export function getDecreaseAction(){
    return {
        type: ActionTypes.DECREASE
    }
}

export function getSetAction(newNumber){
    return {
        type: ActionTypes.SET,
        payload: newNumber
    }
}


