import React, { useState, useEffect } from 'react';
import { getStudentsByPage } from '../../services/student';
import StudentList from '../StudentList';
import Page from '../common/Pager';

// * current 当前页
// * total  总数据量
// * limit 每页放的数据量
// * pannerNumber  页码最多显示几个

export default function StudentContainer() {
    const [studetns, setStudetns] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [limit, setLimit] = useState(10);
    const [pannerNumber, setpannerNumber] = useState(5);
    useEffect(() => {
        (async function () {
            const resp = await getStudentsByPage(page, limit);
            setTotal(resp.cont);
            setStudetns(resp.findByPage);
        })();
        return () => {};
    }, [page, limit]);

    return (
        <div>
            <StudentList stus={studetns} />
            <Page
                current={page}
                total={total}
                limit={limit}
                pannerNumber={pannerNumber}
                onPageChange={(newPage) => {
                    setPage(newPage);
                }}
            />

            <p>
            每页显示的条数
            <input type="number" value={limit}  onChange= {e => {
                setLimit(e.target.value)
            }} />
            </p>
            <p>
            显示多少页数
            <input type="number" value={pannerNumber}  onChange= {e => {
                setpannerNumber(e.target.value)
            }} />
            </p>
            
        </div>
    );
}
