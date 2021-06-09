# 配置式路由

当使用了路由配置后，约定式路由全部失效。


1. 权限路由
- ```User.wrappers = ['@/wrappers/IsLogin', '@/wrappers/HandleTitle']```
- ```User.title = '登录页'```
- src下建立wrappers文件夹,当匹配到路由后，会转而渲染该属性指定的组件，并会将component组件作为children放到匹配的组件中