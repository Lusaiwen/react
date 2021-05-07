import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
} from 'react-router-dom';
import config from './RouteConfig';

console.log(config);

function User() {
    return (
        <div>
            <h1>user用户区域</h1>
            <div>
                <Link to={config.user.update}>用户信息</Link>
                <Link to={config.user.pay.root}>充值</Link>
            </div>
            <div
                style={{
                    width: 500,
                    height: 500,
                    border: '1px solid #000',
                }}
            >
                <Route path={config.user.update} component={UserUpdate}></Route>
                <Route path={config.user.pay.root} component={UserPay}></Route>
            </div>
        </div>
    );
}

function UserPay() {
    return <h1>用户支付</h1>;
}

function UserUpdate() {
    return <h1>用户信息更新</h1>;
}

export default function App() {
    return (
        <div>
            <Router>
                <Route path={config.user.root} component={User}></Route>
                <Redirect to={config.user.root} component={User} />
            </Router>
        </div>
    );
}
