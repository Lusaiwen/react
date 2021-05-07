import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import loginInfo from "./loginInfo";

export default function ProtectRoute({component: Component, render, children, ...rest}) {
    console.log(rest);
    return <Route {...rest}
    render={values => {
        console.log(values);
        if(loginInfo.isLogin){
            return <Component/>
        }else {
            return <Redirect to={{
                pathname: "/login",
                state: values.location.pathname
            }} />
        }
        
    }}
    
    ></Route>;
}
