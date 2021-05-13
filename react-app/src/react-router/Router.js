import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ctx from './routerContext';
import matchPath from './matchPath';

export default class Router extends Component {
    static propsTypes = {
        history: PropTypes.object,
        children: PropTypes.node,
    };

    state = {
        location: this.props.history.location,
    };

    componentDidMount() {
        this.unListen = this.props.history.listen((location, action) => {
            this.props.history.action = action;
            this.setState({
                location,
            });
        });
    }

    componentWillUnmount() {
        this.unListen();
    }

    //上下文对象
    ctxValue = {};

    render() {
        this.ctxValue.history = this.props.history;
        this.ctxValue.location = this.state.location;
        this.ctxValue.match = matchPath('/', this.state.location.pathname);
        return (
            <ctx.Provider value={this.ctxValue}>
                {this.props.children}

                <h1>{this.ctxValue.location.pathname}</h1>
                <button
                    onClick={() => {
                        this.props.history.push('/abc');
                    }}
                >
                    跳转abc
                </button>

                <button
                    onClick={() => {
                        this.props.history.push('/123');
                    }}
                >
                    跳转123
                </button>
            </ctx.Provider>
        );
    }
}
