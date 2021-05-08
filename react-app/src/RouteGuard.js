import React, { Component } from 'react';

import { withRouter, BrowserRouter as Router } from 'react-router-dom';

let prev, cur, action, unBlock, unListen;

class _GuardHelper extends Component {
    componentDidMount() {
        //设置阻塞
        unBlock = this.props.history.block((location, ac) => {
            console.log(this.props);
            prev = this.props.location;
            cur = location;
            action = ac;
            return '';
        });

        //设置监听器
        unListen = this.props.history.listen((location, action) => {
            this.props.onChange &&
                this.props.onChange(
                    this.props.location,
                    location,
                    action,
                    unListen
                );
        });
    }

    render() {
        return null;
    }
}

const GuardHelper = withRouter(_GuardHelper);

class RouteGuard extends Component {
    render() {
        return (
            <Router
                getUserConfirmation={(msg, commit) => {
                    if (this.props.onBeforeChange) {
                        this.props.onBeforeChange(
                            prev,
                            cur,
                            action,
                            commit,
                            unBlock
                        );
                    } else {
                        commit(true);
                    }
                }}
            >
                <GuardHelper onChange={this.props.onChange} />
                {this.props.children}
            </Router>
        );
    }
}

export default RouteGuard;
