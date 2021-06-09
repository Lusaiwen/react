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
        "component": require('@/pages/index.js').default
      },
      {
        "path": "/sub/a",
        "exact": true,
        "component": require('@/pages/sub/a.js').default
      },
      {
        "path": "/sub/b",
        "exact": true,
        "component": require('@/pages/sub/b.js').default
      },
      {
        "path": "/sub/detail/:id",
        "exact": true,
        "component": require('@/pages/sub/detail/[id].js').default
      },
      {
        "path": "/sub",
        "exact": true,
        "component": require('@/pages/sub/index.js').default
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
