import React from 'react';
import {
    Route,
    Link,
    Redirect,
} from 'react-router-dom';
import RouteGuard from './RouteGuard';

function Page1() {
    return (
        <div>
            <h1>Page1</h1>
        </div>
    );
}

function Page2() {
    return (
        <div>
            <h1>Page2</h1>
        </div>
    );
}

export default function App() {
    return (
        <RouteGuard
        onBeforeChange = {(prev, cur, action, commit, unBlock) => {
            console.log(`用户从${prev.pathname}跳转到${cur.pathname},跳转方式为${action}`);
            commit(true);
            unBlock();
        }}
            onChange={(prev, cur, action, unListen) => {
                console.log(
                    `日志: 从页面${prev.pathname}进入页面${cur.pathname}, 进入方式${action}`
                );
                // unListen();
            }}
        >
            <ul>
                <li>
                    <Link to="/page1">页面1</Link>
                </li>
                <li>
                    <Link to="/page2">页面2</Link>
                </li>
            </ul>

            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Redirect to="/page1" component={Page1} />
        </RouteGuard>
    );
}
