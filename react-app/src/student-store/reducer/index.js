//合并所有的reducer
import { combineReducers } from '../../redux-yuan';
import students from './student';

export default combineReducers({
    students
});
