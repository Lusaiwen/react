import { createActions, handleActions } from 'redux-actions';

const actions = createActions({
    SET_STU_AND_TOTAL: (stus, total) => {
        return { datas: stus, total: total };
    },
    SET_IS_LOADING: (isLoading) => isLoading,
    FETCH_STUDENTS: null
});


export const { setStuAndTotal, setIsLoading, fetchStudents } = actions;

export default handleActions(
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
