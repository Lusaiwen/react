import React from 'react';
import { getAllStudents } from '@/services/student';

function Index() {
  getAllStudents().then((resp) => {
    console.log(resp);
  });
  return <div>首页</div>;
}

Index.title = '首页';
Index.wrappers = ['@/wrappers/HandleTitle'];

export default Index;
