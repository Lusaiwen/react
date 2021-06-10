import React from 'react';
import styles from './index.css';
import { Link } from 'umi';

export default function StudentTable(props) {
    const trs =
        props.students &&
        props.students.map((it) => (
            <tr key={it.id}>
                <td>{it.sNo}</td>
                <td>{it.name}</td>
                <td>{it.sex}</td>
                <td>{it.birth}</td>
                <td>{it.address}</td>
                <td>
                    <Link to={`/student/${it.sNo}`}>详情</Link>
                </td>
            </tr>
        ));
    return (
        <table className={styles.tab}>
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
            <tbody>{trs}</tbody>
        </table>
    );
}
