import React from 'react'
import {NavLink} from 'umi'
import styles from './index.less'

export default function index() {
    return (
        <div className={styles.aside}>
            <li>
                <NavLink exact to='/'>管理首页</NavLink>
            </li>
            <li>
                <NavLink exact to='/student'>学生查询</NavLink>
            </li>
            <li>
                <NavLink exact to='/student/add'>添加学生</NavLink>
            </li>
        </div>
    )
}
