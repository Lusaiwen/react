import store from './index';
import { createChangeAction } from './action/student/searchCondition';
import { fetchStudents} from './action/student/searchResult'

// store.dispatch(
//     createChangeAction({
//         key: '',
//         sex: -1,
//         page: 1,
//         limit: 100
//     })
// );

store.dispatch(fetchStudents())
