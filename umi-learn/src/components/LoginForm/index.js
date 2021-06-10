import React, { useRef } from 'react';
import styles from './index.less';

export default function index(props) {
    console.log(props);
    const loginIdRef = useRef();
    const loginPwdRef = useRef();
    return (
        <div className={styles.login}>
            <p className={styles.item}>
                <label>账号</label>
                <input type="text" ref={loginIdRef} />
            </p>
            <p className={styles.item}>
                <label>密码</label>
                <input type="password" ref={loginPwdRef} />
            </p>
            <p className={styles.item}>
                <button
                    onClick={() => {
                        const loginId = loginIdRef.current.value;
                        const loginPwd = loginPwdRef.current.value;
                        props.onLogin && props.onLogin(loginId, loginPwd);
                    }}
                >
                    登录
                </button>
            </p>
        </div>
    );
}
