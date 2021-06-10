import React from 'react';
import LoginFormContainer from '@/components/containers/loginFormContainer';

function Login() {
    return <LoginFormContainer />;
}

Login.title = '登录';
Login.wrappers = ['@/wrappers/IsLogin', '@/wrappers/HandleTitle'];


export default Login;