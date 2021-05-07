import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom';

function A() {
    return <h1>A页</h1>;
}

function B() {
    return <h1>B页</h1>;
}

function NavBar() {
    return (
        <div>
            <NavLink
                to={{
                    pathname: '/a',
                    hash: '#dsf',
                    search: '?a=1&b=2',
                }}
                innerRef={(node) => {
                    console.log(node);
                }}
                style={{
                    marginRight: 30,
                }}
            >
                go to A
            </NavLink>
            <NavLink to="/b">go to B</NavLink>
        </div>
    );
}

export default function App() {
    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/a" component={A} />
                    <Route path="/b" component={B}></Route>
                    <Redirect to='/a'></Redirect>
                </Switch>
            </Router>
        </div>
    );
}
