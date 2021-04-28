import React from 'react'
import './index.css'

export default function Header() {
    return (
        <div className='header-content'>
            <div className="left">
                <span>学生管理系统</span>
            </div>
            <div className="right">
                <span>用户名</span>
                <button>退出</button>
            </div>
        </div>
    )
}
