import { createStore } from 'redux'



/**
 * 
 * action : {type: '操作类型', patload: '附加数据'}
 * @param {*} state 仓库里的数据
 * @param {*} action 描述要做什么
 */
function reducer(state, action) {
    //返回新的数据
    if(action.type === 'increase'){
        return state + 1;
    }
    if(action.type === 'decrease'){
        return state - 1;
    }
    
    //数据无变化,返回源数据
    return state;
}

const store = createStore(reducer, 10);

const inCreaseAction = {
    type: 'increase'
}

const decreaseAction = {
    type: 'decrease'
}

console.log(store.getState());
store.dispatch(inCreaseAction);
console.log(store.getState());
store.dispatch(decreaseAction);
console.log(store.getState());