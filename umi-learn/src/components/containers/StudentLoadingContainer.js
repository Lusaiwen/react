import { connect } from 'umi';
import Loading from '../Loading';

const mapStateToProps = (state) => ({
    show: state.loading.effects['students/fetchStudents']
});

const mapDispatchToProps = (dispatch) => ({
   
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
