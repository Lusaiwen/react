import React from 'react'

function Add() {
    return (
        <div>
            <h1>添加学生页</h1>
        </div>
    )
}


Add.title = '学生添加';
Add.wrappers = ['@/wrappers/IsLogin', '@/wrappers/HandleTitle'];

export default Add;