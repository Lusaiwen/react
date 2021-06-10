import { connect } from 'umi';
import Menu from '../Menu';
import { routerRedux } from 'dva';

const mapStateToProps = (state) => ({
    loginId: state.loginUser
});

const mapDispatchToProps = (dispatch) => ({
    onLoginOut() {
        console.log('触发了');
        dispatch({
            type: 'loginUser/loginOut'
        });
        dispatch(routerRedux.push('/login'));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
