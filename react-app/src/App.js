import React, { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import FadeTransition from './components/common/FadeTransition';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
    
    const [tasks, setTasks] = useState([
        {name: '任务一', id: uuidv4()},
        {name: '任务二', id: uuidv4()},
        {name: '任务三', id: uuidv4()}
    ])

    return (
        <div>
            <TransitionGroup>
                {
                    tasks.map(it => (
                        <FadeTransition appear timeout={3000} key={it.id}>
                            <li>
                                {it.name}
                                <button onClick={() => {
                                    setTasks(tasks.filter(t => it.id !== t.id))
                                }}>删除任务</button>
                            </li>
                        </FadeTransition>
                    ))
                }
            </TransitionGroup>
            <button onClick={() => {
                const name = window.prompt('请输入任务名');
                setTasks([
                    ...tasks,
                    {name: name, id: uuidv4()}
                ])
            }}>添加任务</button>

        </div>
    );
}
