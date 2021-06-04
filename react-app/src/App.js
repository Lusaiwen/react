import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './student-store'
import Counter from './components/Counter'
export default function App() {
    return (
        <Provider store={store}>
            <div>
                <Counter/>
            </div>
        </Provider>
    );
}
