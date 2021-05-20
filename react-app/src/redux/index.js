// import { createStore, bindActionCreators } from 'redux';
import { createStore, bindActionCreators } from '../redux-yuan';
import {
    createAddUserAction,
    createDeleteUserAction,
    createUpdateUser
} from './action/userAction';
import reducer from './reducer';

const store = createStore(reducer);

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

