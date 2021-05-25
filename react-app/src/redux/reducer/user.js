import * as UserAction from '../action/userAction';

const initialState = {
    isLoading: false, //是否正在加载数据
    datas: []
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case UserAction.ADDUSER:
            return {
                ...state,
                datas: [...state.datas, payload]
            };
        case UserAction.DELETEUSER:
            return {
                ...state,
                datas: state.datas.filter((it) => it.id !== payload)
            };
        case UserAction.UPDATEUSER:
            return {
                ...state,
                datas: state.datas.map((it) =>
                    it.id === payload.id ? { ...it, ...payload } : it
                )
            };
        case UserAction.SETUSERS:
            return {
                ...state,
                datas: payload
            };
        case UserAction.SETLOADING:
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state;
    }
};
