import React from 'react';
import { NavLink, history } from 'umi';

export default function Menu() {
    console.log(history);
    return (
        <div>
            <NavLink to="/">首页</NavLink>
            <button
                onClick={() => {
                    history.push('/sub/a');
                }}
            >
                sub/a页
            </button>
            <NavLink to="/sub/b">sub/b页</NavLink>
            <button
                onClick={() => {
                    history.push('/sub');
                }}
            >
                sub页
            </button>
        </div>
    );
}
