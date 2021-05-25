import {getAllStudents } from '../../services/student';


export const ADDUSER = Symbol('add-user');
export const DELETEUSER = Symbol('delete-user');
export const UPDATEUSER = Symbol('update-user');
export const SETUSERS = Symbol('set-users');
export const SETLOADING = Symbol('set-loading');



export const createAddUserAction = (user) => ({
    type: ADDUSER,
    payload: user
});

export const createDeleteUserAction = (id) => ({
    type: DELETEUSER,
    payload: id
});

export const createUpdateUser = (user) => ({
    type: UPDATEUSER,
    payload: user
});

export const createSetUsersAction = (users) => ({
    type: SETUSERS,
    payload: users
});

export const createSetLoadingAction = (isLoading) => ({
    type: SETLOADING,
    payload: isLoading
});

export function fetchaUsers() {
    //由于thunk的存在，可以使用函数方式
    return async function (dispatch, getState, extra) {
        dispatch(createSetLoadingAction(true));
        console.log(extra);
        const res = await getAllStudents();
        const action = createSetUsersAction(res);
        dispatch(action);
        dispatch(createSetLoadingAction(false));
    };
}
