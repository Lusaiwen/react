import { connect } from 'umi';
import StudentTable from '../StudentTable';

const mapStateToProps = (state) => ({
    students: state.students.result.datas
});

export default connect(mapStateToProps, null)(StudentTable);
