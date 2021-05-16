import { createStore, bindActionCreators } from 'redux';
import * as NumberActions from './action/number-action';
import * as ActionTypes from './action/action-types';

/**
 *
 * action : {type: '操作类型', patload: '附加数据'}
 * @param {*} state 仓库里的数据
 * @param {*} action 描述要做什么
 */
function reducer(state, action) {
    //返回新的数据
    if (action.type === ActionTypes.INCREASE) {
        return state + 1;
    }
    if (action.type === ActionTypes.DECREASE) {
        return state - 1;
    } else if (action.type === ActionTypes.SET) {
        return action.payload;
    }

    //数据无变化,返回源数据
    return state;
}

const store = createStore(reducer, 10);
const bindAction = bindActionCreators(NumberActions,store.dispatch );

console.log(store.getState());
bindAction.getIncreaseAction();
console.log(store.getState());
bindAction.getDecreaseAction();
console.log(store.getState());
bindAction.getSetAction(3);
console.log(store.getState());
