import { connect } from 'umi';
import LoginForm from '../LoginForm';
import { routerRedux } from 'dva';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    async onLogin(loginId, loginPwd) {
        const result = await dispatch({
            type: 'loginUser/login',
            payload: {
                loginId,
                loginPwd
            }
        });
        if (result) {
            dispatch(routerRedux.push('/'));
        } else {
            window.alert('账号密码错误');
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
