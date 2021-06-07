import React from 'react';
import './index.css';
import {NavLink} from 'react-router-dom'

export default function Aside() {
    return (
        <ul className="menu">
            {/* <NavLink to="/students">
                <li>学生列表</li>
            </NavLink>
            <NavLink to="/students/add">
                <li>添加学生</li>
            </NavLink>
            <NavLink to="/courses">
                <li>课程列表</li>
            </NavLink>
            <NavLink to="/courses/add">
                <li>添加课程</li>
            </NavLink> */}
            <li><NavLink to="/students">学生列表</NavLink></li>
            <li><NavLink to="/students/add">添加学生</NavLink></li>
            <li><NavLink to="/courses">课程列表</NavLink></li>
            <li><NavLink to="/courses/add">添加课程</NavLink></li>
        </ul>
    );
}
