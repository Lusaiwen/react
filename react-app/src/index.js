import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StudentList from './components/StudentList'

async function getData(){
    return await fetch('http://open.duyiedu.com/api/student/findAll?appkey=17596122336_1569677773123').then(res => res.json()).then(res => res.data);
    
}


async function render(){
    ReactDOM.render((
        "正在加载中"
    ), document.getElementById('root'))
    const data = await getData();
    console.log(data);
    ReactDOM.render((
        <StudentList stus={data}></StudentList>
    ), document.getElementById('root'))
}

render();