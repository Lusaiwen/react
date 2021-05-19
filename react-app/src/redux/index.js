// import { createStore } from 'redux';
import { createStore } from '../redux-yuan';
import {
    createAddUserAction,
    createDeleteUserAction,
    createUpdateUser
} from './action/userAction';
import reducer from './reducer';

const store = createStore(reducer);

console.log(store.getState());
const unListen = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(
    createAddUserAction({
        id: 3,
        name: 'abc'
    })
);

unListen();

store.dispatch(createDeleteUserAction(1));

store.dispatch(
    createUpdateUser({
        id: 2,
        name: 'vdsfds'
    })
);

console.log(store);
