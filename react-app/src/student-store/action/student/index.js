//合并处理student的reducer
import { combineReducers } from '../../../redux-yuan';
import studetnCondition from './searchCondition';
import studentResult from './searchResult';

export default combineReducers({
    condition: studetnCondition,
    result: studentResult
});
