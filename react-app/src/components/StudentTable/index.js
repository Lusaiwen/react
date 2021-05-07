import React from 'react';
import './index.css'

export default function StudentTable(props) {
    const trs = props.students && props.students.map(it => (
        <tr key={it.id}>
            <td>{it.sNo}</td>
            <td>{it.name}</td>
            <td>{it.sex}</td>
            <td>{it.birth}</td>
            <td>{it.address}</td>
            <td>/</td>
        </tr>
    ))
    return (
        <table className="tab">
            <thead>
                <tr>
                    <td>学号</td>
                    <td>姓名</td>
                    <td>性别</td>
                    <td>出生年月</td>
                    <td>邮箱</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                {trs}
            </tbody>
        </table>
    );
}
