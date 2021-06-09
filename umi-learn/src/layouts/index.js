import React from 'react';
import { NavLink } from 'umi';
import './index.css'
export default function index(props) {
    return (
        <div>
            <div>
                <NavLink to='/'>首页</NavLink>
                <NavLink to='/login'>登录页</NavLink>
                <NavLink to='welcome'>欢迎页</NavLink>
            </div>
            {props.children}
            <div>页脚</div>
        </div>
    );
}
