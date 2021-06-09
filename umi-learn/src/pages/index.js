import React from 'react';

function Index(props) {
    console.log(props);
    return <div>首页</div>;
}

Index.title = '首页';
Index.wrappers = ['@/wrappers/HandleTitle'];

export default Index;
