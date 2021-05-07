const info =  {
    isLogin: false,
    login(){
        this.isLogin = true;
    },
    loginOut(){
        this.isLogin = false;
    }
}

export default info;