import { createStore } from 'redux';
import reducer from './reducer/index';
import { createAddUserAction, createDeleteUserAction, createUpdateUser } from './action/userAction';

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(
    createAddUserAction({
        id: 3,
        name: 'abc'
    })
);

store.dispatch(
    createDeleteUserAction(1)
);

store.dispatch(
    createUpdateUser({
        id: 2,
        name: 'vdsfds'
    })
);
