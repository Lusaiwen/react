import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link,NavLink } from './react-router-dom';


function Page1() {
    return <div>page1</div>;
}

function Page2({ history }) {
    return (
        <div>
            page2
            <button
                onClick={() => {
                    history.push('/page1');
                }}
            >
                跳转page1
            </button>
        </div>
    );
}


export default function App() {
    return (
        <Router>
            <ul>
                <li>
                    <NavLink to={{
                        pathname: '/page1',
                        search: '?',
                        hash: '#'
                    }}>page1</NavLink>
                </li>
                <li>
                    <NavLink to="/page2?search=1#hash">page2</NavLink>
                </li>
            </ul>
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
        </Router>
    );
}
