import React from 'react';

function Welcome({ history }) {
    const loginId = localStorage.getItem('loginId');
    return (
        <div>
            <h1>欢迎，{loginId}</h1>
            <button
                onClick={() => {
                    localStorage.removeItem('loginId');
                    history.push('/login');
                }}
            >
                注销
            </button>
        </div>
    );
}

Welcome.title = '欢迎页';
Welcome.wrappers = ['@/wrappers/IsLogin', '@/wrappers/HandleTitle'];

export default Welcome;
