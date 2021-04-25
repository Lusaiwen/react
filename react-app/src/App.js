import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import './App.css'

const duration = 300;


export default function App() {
    const [inProp, setInProp] = useState(false);
    return (
        <div>
            <Transition in={inProp} timeout={500} addEndListener={(node, done) => {
                console.log(node, done);
            }}>
                {(state) => {
                    console.log(state);
                    return (
                        <div className={state +  ' fetch'}
                        >
                            I'm a fade Transition!
                        </div>
                    );
                }}
            </Transition>
            <button onClick={() => setInProp(!inProp)}>Click to Enter</button>
        </div>
    );
}
