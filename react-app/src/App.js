import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from './react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function Page1() {
    return <div>page1</div>;
}

function Page2() {
    return <div>page2</div>;
}

function Change({ history }) {
    return (
        <div>
            <button
                onClick={() => {
                    history.push('/page1');
                }}
            >
                跳转page1
            </button>
            <button
                onClick={() => {
                    history.push('/page2');
                }}
            >
                跳转page2
            </button>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path='/' component={Change}/>
        </Router>
    );
}
