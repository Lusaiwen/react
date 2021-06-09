import React, { useRef } from 'react';
function Login({history}) {
    const loginIdRef = useRef();
    const loginPwdRef = useRef();
    return (
        <div>
            <p>
                账号
                <input type="text" ref={loginIdRef} />
            </p>
            <p>
                密码
                <input type="password" ref={loginPwdRef} />
            </p>
            <p>
                <button
                    onClick={() => {
                        if (loginPwdRef.current.value === '123123') {
                            //登录成功
                            history.push('/welcome');
                            const loginId = loginPwdRef.current.value;
                            localStorage.setItem('loginId', loginId);
                        }else {
                            alert('账号密码错误');
                        }
                    }}
                >
                    登录
                </button>
            </p>
        </div>
    );
}


Login.title = '登录页';
Login.wrappers = ['@/wrappers/HandleTitle']

export default Login;