import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './student-store';
import StudentSearch from './components/StudentSearchBar';

export default function App() {
    return (
        <Provider store={store}>
            <div>
                <StudentSearch />
            </div>
        </Provider>
    );
}
