import { change } from '../../action/student/searchCondition';
import { handleActions } from 'redux-actions';

const reducer = handleActions(
    {
        [change]: (state, {payload}) => ({ ...state, ...payload })
    },
    {
        sex: -1,
        page: 1,
        size: 10,
        search: ''
    }
);

export default reducer;
