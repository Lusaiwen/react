import { actionTypes } from '../../action/counter';

export default function reducer(state = 10, { type, payload }) {
    switch (type) {
        case actionTypes.increase:
            return state++;
        case actionTypes.decrease:
            return state--;
        default:
            return state;
    }
}
