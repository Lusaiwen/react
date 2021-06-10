import React from 'react';
import styles from './index.less';

export default function index(props) {
    console.log(props);
    return (
        <div className={styles.menu}>
            <div className={styles.title}>学生管理系统</div>
            <div className={styles.loginInfo}>
                <span>欢迎你</span>
                <span>{props.loginId}</span>
                <button onClick={props.onLoginOut}>退出登录</button>
            </div>
        </div>
    );
}
