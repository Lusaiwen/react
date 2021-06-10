import React from 'react';
import { connect } from 'umi';
import { routerRedux } from 'dva';
function IsLogin(props) {
    if (props.loginId) {
        return props.children;
    } else {
        props.onNotLogin && props.onNotLogin();
        return null;
    }
}

const mapStateToprops = (state) => ({
    loginId: state.loginUser
});

const mapDispatchToProps = (dispatch) => ({
    onNotLogin() {
        dispatch(routerRedux.push('/login'));
    }
});

export default connect(mapStateToprops, mapDispatchToProps)(IsLogin);
