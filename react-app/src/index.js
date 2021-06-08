import React from 'react';
import routerConfig from './routerConfig';
import dva from 'dva';
import counterModel from './models/counter';
import studentsModel from './models/students';
import { createBrowserHistory } from 'history';
import dvaPlugin from './myDvaPlugin';
import createLoading from 'dva-loading';

//得到一个dva对象
const app = dva({
    history: createBrowserHistory()
});

app.use(dvaPlugin);
app.use(createLoading());

//
app.model(counterModel);
app.model(studentsModel);

//设置根路由，即启动后，要运行的函数，函数的返回结果会被渲染
app.router(routerConfig);

app.start('#root');
