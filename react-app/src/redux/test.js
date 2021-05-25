import store from './index';
import { fetchaUsers } from './action/userAction';

store.dispatch(fetchaUsers());
