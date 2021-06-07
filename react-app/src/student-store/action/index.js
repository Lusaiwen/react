import { combineReducers } from '../../redux-yuan';
import students from './student';
import counter from './counter'
import { connectRouter } from 'connected-react-router'
import history from '../history'

export default combineReducers({
    students,
    counter,
    router: connectRouter(history)
});
