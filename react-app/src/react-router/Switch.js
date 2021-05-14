import React, { Component } from 'react';
import matchPath from './matchPath';
import ctx from './routerContext';
import Route from './Route';

export default class Switch extends Component {
    getMatchRoute = ({ location }) => {
        let childs = [];
        if (Array.isArray(this.props.children)) {
            childs = this.props.children;
        } else if (typeof this.props.children === 'object') {
            childs.push(this.props.children);
        }

        for (const child of childs) {
            if (child.type !== Route) {
                throw new TypeError(
                    'the child of Switch Component must be type of Route'
                );
            }
            const {
                path = '/',
                exact = false,
                strict = false,
                sensitive = false,
            } = child.props;

            const match = matchPath(path, location.pathname, {
                exact,
                sensitive,
                strict,
            });

            if (match) {
                console.log(child);
                return child;
            }
        }

        return null;
    };

    render() {
        return <ctx.Consumer>{this.getMatchRoute}</ctx.Consumer>;
    }
}
