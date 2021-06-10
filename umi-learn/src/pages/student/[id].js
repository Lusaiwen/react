import React from 'react'

function Id(props) {
    console.log(props.match.params.id);
    return (
        <div>
            <h1>学生详情页</h1>
            <h1>学生学号: {props.match.params.id} </h1>
        </div>
    )
}



Id.title = '详情页';
Id.wrappers = ['@/wrappers/IsLogin', '@/wrappers/HandleTitle'];

export default Id;
