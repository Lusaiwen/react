// import { createStore, bindActionCreators } from 'redux';
// import { createStore, bindActionCreators } from '../redux-yuan';
import { createStore, bindActionCreators, applyMiddleware} from 'redux'
import {
    createAddUserAction,
    createDeleteUserAction,
    createUpdateUser
} from './action/userAction';
import reducer from './reducer';


const logger1 = store => next => action => {
    console.log('中间件1');
    console.log('旧数据', store.getState());
    next(action);
    console.log('中间件1新数据', store.getState());
    console.log("");
}

const logger2 = store => next => action => {
    console.log('中间件2');
    console.log('旧数据', store.getState());
    next(action);
    console.log('中间件2新数据', store.getState());
}


// const store = createStore(reducer, applyMiddleware(logger1, logger2));
const store = applyMiddleware(logger1, logger2)(createStore)(reducer);

console.log(store.getState());

const actionCreators = {
    createAddUserAction,
    createDeleteUserAction,
    createUpdateUser
};

const bindActions = bindActionCreators(actionCreators, store.dispatch);
const unListen = store.subscribe(() => {
    console.log(store.getState());
});

bindActions.createAddUserAction({
    id: 3,
    name: 'abc'
});

// unListen();


bindActions.createDeleteUserAction(1);


bindActions.createUpdateUser({
    id: 2,
    name: 'fsdgfds'
})

