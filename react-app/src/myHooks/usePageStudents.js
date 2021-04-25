import { useState, useEffect } from 'react';
import { getStudentsByPage } from '../services/student';


/**
 * 分页渲染学生数据
 * 无依赖项
 * @returns 返回学生数据
 */
export default function usePageStudents(page = 1, limit = 10) {
    const [resp, setResp] = useState({});  
    useEffect(() => {
        (async () => {
            const resp = await getStudentsByPage(page, limit);
            setResp(resp);
        })()
        return () => {};
    }, [page, limit]);
    return resp;
}
