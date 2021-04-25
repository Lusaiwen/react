import React from 'react'
import './myHooks/useAllStudents'
import usePageStudents from './myHooks/usePageStudents'


function Test(){
    console.log('运行');
    const resp = usePageStudents();
    const lis = resp.findByPage && resp.findByPage.map(it => <li key={it.id}>{it.name}</li>)
    return (
        <div>
            <h1>{resp.cont}</h1>
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




