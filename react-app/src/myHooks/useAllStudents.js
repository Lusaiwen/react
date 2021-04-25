import { useState, useEffect } from 'react';
import { getAllStudents } from '../services/student';




/**
 * 第一次渲染学生数据
 * 无依赖项
 * @returns 返回学生数据
 */
export default function useAllStudents() {
    const [students, setStudents] = useState([]);  
    useEffect(() => {
        (async () => {
            const stus = await getAllStudents();
            setStudents(stus);
        })()
        return () => {};
    }, []);
    return students;
}
