import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './student-store';
import { Switch, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Login from './pages/Login';
import { ConnectedRouter } from 'connected-react-router';
import history from './student-store/history';

export default function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Admin} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}
