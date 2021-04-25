import React from 'react'
import './myHooks/useAllStudents'
import useAllStudents from './myHooks/useAllStudents'


function Test(){
    const stus = useAllStudents();
    const lis = stus.map(it => <li key={it.id}>{it.name}</li>)
    return (
        <div>
            {lis}
        </div>
    )
}

export default function App() {
    return (
        <div>
            <Test/>
        </div>
    )
}




