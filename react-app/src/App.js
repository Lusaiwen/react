import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function News(props) {
    console.log(props);
    const year = props.match.params.year;
    const month = props.match.params.month;
    const day = props.match.params.day;
    return (
        <div>
            {`当前是${year}年${month}月${day}日`}
            <button
                onClick={() => {
                    props.history.push('/b');
                }}
            >
                跳转B
            </button>
        </div>
    );
}

function B(props) {
    return <div>组件B</div>;
}

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/a/:year(\d+)?/:month?/:day?/*"  exact component={News} />
                <Route path="/" component={B} />
            </Switch>
        </Router>
    );
}
