import React, { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './App.css';
import 'animate.css';

function Comp1() {
    return <h1 className="title animate__animated">组件1</h1>;
}

function Comp2() {
    return <h1 className="title animate__animated">组件2</h1>;
}

export default function App() {
    const [visible, setVisible] = useState(true);

    return (
        <div className="container">
            <SwitchTransition>
                <CSSTransition
                    appear
                    mountOnEnter
                    timeout={800}
                    key={visible}
                    classNames={{
                        enter: "animate__backInRight",
                        exit: "animate__backOutLeft",
                    }}
                >
                    {visible ? <Comp1/> : <Comp2/>}
                </CSSTransition>
            </SwitchTransition>

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
