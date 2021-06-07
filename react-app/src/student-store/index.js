//创建并导出仓库
import { createStore, applyMiddleware } from 'redux';
// import reducer from './reducer失效';
import reducer from './action';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import sagaTask from './saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'
import history from './history'
const routerMid = routerMiddleware(history)

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(routerMid, sagaMiddleWare, logger))
);

sagaMiddleWare.run(sagaTask);
console.log(store.getState());
export default store;
