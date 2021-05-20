import loginUser from './loginUser';
import user from './user';
// import { combineReducers } from 'redux';
import { combineReducers } from '../../redux-yuan';


// export default function reducer(state = {}, action) {
//     const newState = {
//         loginUser: loginUser(state.loginUser, action),
//         user: user(state.user, action)
//     }

//     return newState;
// }



export default combineReducers({
    loginUser: loginUser,
    user: user
});
