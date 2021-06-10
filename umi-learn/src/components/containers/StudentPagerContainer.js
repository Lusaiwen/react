import { connect } from 'umi';
import Pager from '../common/Pager';

const mapStateToProps = (state) => ({
    current: state.students.condition.page,
    total: state.students.result.total,
    limit: state.students.condition.limit,
    pannerNumber: 5
});

const mapDispatchToProps = (dispatch) => ({
    onPageChange(newPage) {
        //重新设置条件
        dispatch({
            type: 'students/setCondition',
            payload: {
                page: newPage
            }
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pager);
