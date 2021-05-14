import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ctx from './routerContext';
import matchPath from './matchPath';

export default class Route extends Component {
    /*
    path：路径规则，可以是字符串，可以是字符串数组
    children：无论是否匹配，都应该渲染的子元素
    render：匹配成功后，渲染函数
    component：匹配成功后，渲染的组件

    以下是调用matchPath方法时的配置
    exact
    strict
    sensitive
    */
    static propTypes = {
        path: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
        ]),
        render: PropTypes.func,
        children: PropTypes.node,
        component: PropTypes.elementType,
        exact: PropTypes.bool,
        strict: PropTypes.bool,
        sensitive: PropTypes.bool,
    };

    /**
     * 根据location, 返回match对象
     * @param {*} location
     */
    matchRoute = (location) => {
        const { exact = false, sensitive = false, strict = false } = this.props;

        return matchPath(this.props.path || '/', location.pathname, {
            exact,
            sensitive,
            strict,
        });
    };

    renderChildren = (ctx) => {

        console.log(this.props);
        if (this.props.children) {
            //无论是否有children,都要渲染
            if (typeof this.props.children === 'function') {
                return this.props.children(ctx);
            } else {
                return this.props.children;
            }
        }

        //匹配到了match
        if (!ctx.match) {
            return;
        }

        //render有值
        if (typeof this.props.render === 'function') {
            return this.props.render(ctx);
        }

        if (this.props.component) {
            return <this.props.component {...ctx}/>;
        }

        return null;
    };

    consumerFunc = (value) => {
        const ctxValue = {
            history: value.history,
            location: value.location,
            match: this.matchRoute(value.location),
        };

        return <ctx.Provider value={ctxValue}>
            {this.renderChildren(ctxValue)}
        </ctx.Provider>;
    };

    render() {
        return <ctx.Consumer>{this.consumerFunc}</ctx.Consumer>;
    }
}
