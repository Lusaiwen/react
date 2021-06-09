# umijs 简介

> 官网：https://umijs.org/

-   插件化
-   开箱即用
-   约定式路由

## 全局安装 umi

提供了一个命令行工具：umi，通过该命令可以对 umi 工程进行操作

> umi 还可以使用对应的脚手架

-   dev: 使用开发模式启动工程

# 约定式路由

umi 对路由的处理，主要通过两种方式：

1. **约定式**：使用约定好的文件夹和文件，来代表页面，umi 会根据开发者书写的页面，生成路由配置。
2. 配置式：直接书写路由配置文件

## 路由匹配

-   umi 约定，工程中的 pages 文件夹中存放的是页面。如果工程包含 src 目录，则 src/pages 是页面文件夹。
-   umi 约定，页面的文件名，以及页面的文件路径，是该页面匹配的路由
-   umi 约定，如果页面的文件名是 index，则可以省略文件名（首页）(注意避免文件名和当前目录中的文件夹名称相同)
-   umi 约定，如果 src/layouts 目录存在，则该目录中的 index.js 表示的是全局的通用布局，布局中的 children 则会添加具体的页面。
-   umi 约定，如果 pages 文件夹中包含\_layout.js，则 layout.js 所在的目录以及其所有的子目录中的页面，共用该布局。
-   404 约定，umi 约定，pages/404.js，表示 404 页面，如果路由无匹配，则会渲染该页面。
-   使用[]名称，会产生动态路由
-   约定 [ $] 包裹的文件或文件夹为动态可选路由

## 路由跳转

-   跳转链接： 导入` import {link , NavLink} from 'umi'`，`umi/navlink`
-   代码跳转： 导入`import { history } from 'umi'`

> 导入模块时，@表示 src 目录

## 路由信息的获取

所有的页面、布局组件，都会通过属性，收到下面的属性

-   match：等同于 react-router 的 match
-   history：等同于 react-router 的 history（history.location.query 被封装成了一个对象，使用的是 query-string 库进行的封装）
-   location：等同于 react-router 的 location（location.query 被封装成了一个对象，使用的是 query-string 库进行的封装）
-   route：对应的是路由配置

如果需要在普通组件中获取路由信息，则需要使用 withRouter 封装，可以通过`umi/withRouter`导入
