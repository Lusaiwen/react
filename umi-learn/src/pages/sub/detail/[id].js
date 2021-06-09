import React from 'react'

export default function $id(props) {
    console.log(props);
    return (
        <div>
            <h1>详情页</h1>
            <h1>{props.match.params.id}</h1>
        </div>
    )
}
