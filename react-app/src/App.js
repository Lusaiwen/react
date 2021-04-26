import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

function MyComp({ visible, children }) {
    return (
        <CSSTransition appear mountOnEnter in={visible} timeout={500}>
            {children}
        </CSSTransition>
    );
}

function Comp1() {
    return <h1 className="title">组件1</h1>;
}

function Comp2() {
    return <h1 className="title">组件2</h1>;
}

export default function App() {
    const [visible, setVisible] = useState(true);

    return (
        <div className="container">
            <MyComp visible={visible}>
                <Comp1 />
            </MyComp>
            <MyComp visible={!visible}>
                <Comp2 />
            </MyComp>

            <button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                切换显示
            </button>
        </div>
    );
}
