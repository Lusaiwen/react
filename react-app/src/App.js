import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import 'animate.css';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
    const [tasks, setTasks] = useState([
        { name: '任务一', id: uuidv4() },
        { name: '任务二', id: uuidv4() },
    ]);

    return (
        <>
            <TransitionGroup>
                {tasks.map((it) => (
                    <CSSTransition key={it.id} timeout={1000}>
                        <div>
                            {it.name}{' '}
                            <button
                                onClick={() => {
                                    setTasks(
                                        tasks.filter((t) => it.id !== t.id)
                                    );
                                }}
                            >
                                删除
                            </button>
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
            <button onClick={() => {
                const name = window.prompt('请输入任务名称');
                setTasks([...tasks, {name: name, id: uuidv4()}])
            }}>添加一个任务</button>
        </>
    );
}
