// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/MI/AppData/Local/Yarn/Data/global/node_modules/@umijs/runtime';
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
