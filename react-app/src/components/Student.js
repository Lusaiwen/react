import React from 'react'

export default function Student(props) {
    return (
        <li>
            姓名：{props.name},
            年龄：{props.age},
            邮箱: {props.email},
            住址：{props.address}
        </li>
    )
}
