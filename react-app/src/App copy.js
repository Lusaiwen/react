import React, { useState } from 'react';
import { SwitchTransition } from 'react-transition-group';
import './App.css';
import 'animate.css';
import FadeTransition from './components/common/FadeTransition';
// import { v4 as uuidv4 } from 'uuid';

export default function App() {
    const [visible, setVisible] = useState(true);
    return (
        <div>
            <SwitchTransition>
                <FadeTransition in={visible} timeout={5000} key={visible} >
                    <h1>{visible ? '显示' : '隐藏'}</h1>
                </FadeTransition>
            </SwitchTransition>

            <button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                显示/隐藏
            </button>
        </div>
    );
}
