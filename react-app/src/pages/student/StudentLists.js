import React, { useState, useEffect } from 'react';
import StudentSearchBar from '../../components/StudentSearch';
import StudentTable from '../../components/StudentTable';
import Pager from '../../components/common/Pager';
import { getSearchStudents } from '../../services/student';
import qs from 'query-string';

/**
 * 该函数用于获取地址栏参数中提供的查询条件，返回一个对象
 * 如果某些条件在地址中缺失，该函数会使用默认值
 */
function getQuery(search) {
    const queryDefault = {
        page: 1,
        size: 10,
        search: '',
        sex: -1,
    };
    let query = qs.parse(search);
    query = Object.assign({}, queryDefault, query);
    query.size = +query.size;
    query.page = +query.page;
    query.sex = +query.sex;
    return query;
}

function useResp(query) {
    const [resp, setResp] = useState({
        cont: 0,
        datas: [],
    });
    useEffect(() => {
        (async function () {
            const resp = await getSearchStudents({
                page: query.page,
                size: query.size,
                search: query.search,
                sex: query.sex,
            });
            setResp(resp);
        })();
        return () => {};
    }, [query]);
    console.log(resp);
    return resp;
}

function changeLocation(query, history) {
    const search = qs.stringify(query);
    history.push('?' + search);
}

export default function StudentLists(props) {
    const query = getQuery(props.location.search);
    const resp = useResp(query);

    console.log(query);
    console.log(resp);
    return (
        <div>
            <StudentSearchBar
                sex={query.sex}
                search={query.search}
                onSearch={(cod) => {
                    const newQuery = {
                        ...query,
                        key: cod.key,
                        sex: cod.sex,
                        page: 1,
                    };
                    changeLocation(newQuery, props.history);
                }}
            />
            <StudentTable students={resp.datas} />
            <Pager
                current={query.page}
                total={resp.cont}
                limit={query.size}
                pannerNumber={5}
                onPageChange={(newPage) => {
                    const newQuery = {
                        ...query,
                        page: newPage,
                    };
                    changeLocation(newQuery, props.history);
                }}
            ></Pager>
        </div>
    );
}
