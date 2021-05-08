import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as Page from './page';
import './App.css';
import { CSSTransition } from 'react-transition-group';
import 'animate.css';
import TransitionRoute from './components/common/TransitionRoute';

export default function App() {
    return (
        <div className="main">
            <Router>
                <Page.Nav />
                <div className="container">
                    <TransitionRoute path="/" exact component={Page.Home}></TransitionRoute>
                    <TransitionRoute path="/news" exact component={Page.News}></TransitionRoute>
                    <TransitionRoute
                        path="/personal"
                        exact
                        component={Page.Personal}
                    ></TransitionRoute>
                </div>
            </Router>
        </div>
    );
}
