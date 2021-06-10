import React from 'react';
import StudentSearch from '@/components/containers/StudentSearchContainer';
import StudentTable from '@/components/containers/StudentTableContainer';
import StudentPager from '@/components/containers/StudentPagerContainer';
import StudentLoading from '@/components/containers/StudentLoadingContainer';

function Index() {
    return (
        <>
            <StudentSearch />
            <StudentTable />
            <StudentPager />
            <StudentLoading />
        </>
    );
}

Index.title = '学生首页';
Index.wrappers = ['@/wrappers/IsLogin', '@/wrappers/HandleTitle'];

export default Index;
