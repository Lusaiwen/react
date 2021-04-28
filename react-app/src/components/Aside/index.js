import React from 'react';
import './index.css';

export default function Aside() {
    return (
        <ul className="menu">
            <a href="/students">
                <li>学生列表</li>
            </a>
            <a href="/students/add">
                <li>添加学生</li>
            </a>
            <a href="/courses">
                <li>课程列表</li>
            </a>
            <a href="/courses/add">
                <li>添加课程</li>
            </a>
            {/* <li><a href="/students">学生列表</a></li>
            <li><a href="/students/add">添加学生</a></li>
            <li><a href="/courses">课程列表</a></li>
            <li><a href="/courses/add">添加课程</a></li> */}
        </ul>
    );
}
