// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/MI/Desktop/学习/2021-01-12/react/react/umi-learn/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.js').default,
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": require('@/pages/404.js').default
      },
      {
        "path": "/counter",
        "exact": true,
        "component": require('@/pages/counter.js').default,
        "title": "计数器",
        "wrappers": [require('@/wrappers/HandleTitle').default]
      },
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.js').default,
        "title": "首页",
        "wrappers": [require('@/wrappers/HandleTitle').default]
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('@/pages/login.js').default,
        "title": "登录页",
        "wrappers": [require('@/wrappers/HandleTitle').default]
      },
      {
        "path": "/sub",
        "exact": true,
        "component": require('@/pages/sub/index.js').default
      },
      {
        "path": "/welcome",
        "exact": true,
        "component": require('@/pages/welcome.js').default,
        "title": "欢迎页",
        "wrappers": [require('@/wrappers/IsLogin').default, require('@/wrappers/HandleTitle').default]
      },
      {
        "component": require('@/pages/404.js').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
