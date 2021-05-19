import { SETLOGINUSER } from '../action/loginUserAction';

const initialState = null;

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SETLOGINUSER:
            return payload;
        default:
            return state;
    }
};


