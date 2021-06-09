import React from 'react';
import { Link } from 'umi';

export default function IsLogin(props) {
    const loginId = localStorage.getItem('loginId');
    if (loginId) {
        return <div>{props.children}</div>;
    } else {
        return (
            <div>
                <p>您还未登录<Link to='/login'>请登录</Link></p>
            </div>
        );
    }
}
