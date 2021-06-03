import { combineReducers } from '../../redux-yuan';
import students from './student';
import counter from './counter'

export default combineReducers({
    students,
    counter
});
