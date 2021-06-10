import { defineConfig } from 'umi';

export default defineConfig({
  //   nodeModulesTransform: {
  //     type: 'none',
  //   },
  //   routes: [{ path: '/', component: '@/pages/index' }],
  //   fastRefresh: {},
  dva: {
    immer: true,
    hmr: false
  },
//   proxy: {
//     '/api': {
//       target: 'http://open.duyiedu.com',
//       changeOrigin: true
//     }
//   }
});
