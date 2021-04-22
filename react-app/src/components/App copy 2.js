import React, {useState, useEffect} from 'react'




function Test(porps){

    console.log('渲染组件');
    useEffect(() => {
        console.log('副作用函数，仅挂载时运行一次');
        return () => {
            console.log('清除函数，仅在卸载组件时运行一次');
        }
    }, [])
    const [, forceUpdate] = useState({});

    return (
        <div>
            <button onClick={() => {
                forceUpdate({});
            }}>刷新</button>
        </div>
    )
}


export default function App() {
    return (
        <div>
            <Test/>
        </div>
    )
}
