import {
    setIsLoading,
    setStuAndTotal
} from '../../action/student/searchResult';
import { handleActions } from 'redux-actions';

const reducer = handleActions(
    {
        [setIsLoading]: (state, action) => ({
            ...state,
            isLoading: action.payload
        }),
        [setStuAndTotal]: (state, action) => ({ ...state, ...action.payload })
    },
    {
        datas: [],
        total: 0,
        isLoading: false
    }
);

export default reducer;
