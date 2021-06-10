import { connect } from 'umi';
import StudentSearch from '../StudentSearch';

const mapStateToProps = (state) => ({
    keys: state.students.condition.key,
    sex: state.students.condition.sex
});

const mapDispatchToProps = (dispatch) => ({
    onSearch(newCondition) {
        dispatch({ type: 'students/setCondition', payload: newCondition });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentSearch);
