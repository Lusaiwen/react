// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from 'C:/Users/MI/Desktop/学习/2021-01-12/react/react/umi-learn/src/.umi/plugin-dva/runtime.tsx';
import * as Plugin_1 from '../plugin-initial-state/runtime';
import * as Plugin_2 from '../plugin-model/runtime';

  plugin.register({
    apply: Plugin_0,
    path: 'C:/Users/MI/Desktop/学习/2021-01-12/react/react/umi-learn/src/.umi/plugin-dva/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_1,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_2,
    path: '../plugin-model/runtime',
  });
