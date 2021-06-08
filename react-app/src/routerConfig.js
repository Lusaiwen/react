import React from 'react';
import './myHooks/useAllStudents';
import Counter from './Counter';
import { routerRedux, NavLink, Route, Switch } from 'dva/router';

function Home(){
    return <div>
        主页
    </div>
}


export default function App({history}) {
    return (
        <routerRedux.ConnectedRouter history={history}>
            <div>
                <ul>
                    <li>
                        <NavLink to="/">主页</NavLink>
                    </li>
                    <li>
                        <NavLink to="/counter">计数器</NavLink>
                    </li>
                </ul>
                <div>
                    <Switch>
                    <Route path='/counter' component={Counter}/>
                    <Route path='/' component={Home}/>
                    </Switch>
                   
                </div>
            </div>
        </routerRedux.ConnectedRouter>
    );
}
