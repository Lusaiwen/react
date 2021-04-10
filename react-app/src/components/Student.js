import React from 'react'

export default function Student({name, birth, address}) {
    return (
        <li>
            姓名：{name} 
            出生日期：{birth}
            住址：{address}
        </li>
    )
}
