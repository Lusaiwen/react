import React from 'react';
import { getAllStudents } from '@/services/student';

function Index() {
    getAllStudents().then((resp) => {
        console.log(resp);
    });
    return <div><h1>首页</h1></div>;
}

Index.title = '首页';
Index.wrappers = ['@/wrappers/IsLogin', '@/wrappers/HandleTitle'];

export default Index;
