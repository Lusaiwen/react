import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
} from 'react-router-dom';
import ProtectRoute from './components/common/ProtectRoute'
import loginInfo from './loginInfo'

function Home() {
    return (
        <div>
            <h1>首页</h1>
        </div>
    );
}

function Personal() {
    return (
        <div>
            <h1>个人中心</h1>
        </div>
    );
}

function Login(props) {
    return (
        <div>
            <h1>登陆页面</h1>
            <button onClick={() => {
                loginInfo.isLogin = true;
                if(props.location.state){
                    props.history.push(props.location.state)
                }else {
                    props.history.push("/");
                }
            }}>登录</button>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/login">登录</Link>
                </li>
                <li>
                    <Link to="/personal">个人中心</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/login" component={Login}></Route>
                <ProtectRoute path="/personal" component={Personal}></ProtectRoute>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}
