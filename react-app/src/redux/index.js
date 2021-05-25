// import { createStore, bindActionCreators } from 'redux';
// import { createStore, bindActionCreators } from '../redux-yuan';
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// const store = createStore(reducer, applyMiddleware(logger1, logger2));
export default applyMiddleware(thunk, logger)(createStore)(reducer);
