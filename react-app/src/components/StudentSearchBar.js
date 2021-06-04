import React from 'react';
import { connect } from 'react-redux';
import StudentSearch from './StudentSearch';
import { change as changeCondition } from '../student-store/action/student/searchCondition';
import { fetchStudents} from '../student-store/action/student/searchResult'
import Loading from './Loading'
import Pager from './common/Pager'
import StudentTable from './StudentTable'
//连接 StudentSearchBar
let mapStateToProps = (state) => ({
        search: state.students.condition.search,
        sex: state.students.condition.sex
});

let mapDispatchToProps = (dispatch) => ({
    onSearch: (newCondition) => {
        //重新设置条件
        dispatch(changeCondition(newCondition));
        //触发获取学生数据的action
        dispatch(fetchStudents());
    }
});
//连接数据和处理函数之后，得到一个新的组件
const SearchBar = connect(mapStateToProps, mapDispatchToProps)(StudentSearch);


//连接 StudentTable
mapStateToProps = state => ({
    students: state.students.result.datas
})
const Table = connect(mapStateToProps)(StudentTable)

//连接 Pager
mapStateToProps = state => ({
    current: state.students.condition.page,
    total: state.students.result.total,
    pageNumber: 5,
    limit: state.students.condition.size
})
mapDispatchToProps = dispatch => ({
    onPageChange: (newPage) => {
        //重新设置条件
        dispatch(changeCondition({
            page: newPage
        }))
        console.log('换页', newPage);
        // 触发获取学生数据的action
        dispatch(fetchStudents());
    }
})
const PagerTemp = connect(mapStateToProps, mapDispatchToProps)(Pager)

//连接 Loading
mapStateToProps = state => ({
    show: state.students.result.isLoading
})
const LoadingTemp = connect(mapStateToProps)(Loading);


export default function Search() {
    return (
        <>
            <SearchBar />
            <Table />
            <PagerTemp />
            <LoadingTemp />
        </>
    );
}
