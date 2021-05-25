import * as UserAction from '../action/userAction';

const initialState = [
    {
        id: 1,
        name: '1'
    },
    {
        id: 2,
        name: '2'
    }
];

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case UserAction.ADDUSER:
            return [...state, payload];
        case UserAction.DELETEUSER:
            return state.filter((it) => it.id !== payload);
        case UserAction.UPDATEUSER:
            return state.map((it) =>
                it.id === payload.id ? { ...it, ...payload } : it
            );
        default:
            return state;
    }
};
