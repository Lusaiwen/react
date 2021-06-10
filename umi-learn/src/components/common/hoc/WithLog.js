import React from 'react';

export default function WithLog(Comp) {
    class LogWrapper extends React.Component {
        componentDidMount() {
            console.log(`日志：组件${Comp.name}被创建了！${Date.now()}`);
        }

        componentWillUnmount(){
            console.log(`日志：组件${Comp.name}被销毁了！${Date.now()}`);
        }
        render() {
            //正常的属性
            //forwardRef代表要转发的ref
            const {forwardRef, ...rest} = this.props;
            console.log(forwardRef);
            return <>
                <Comp ref={forwardRef}  {...rest} />
            </>;
        }
    }

    return React.forwardRef((props, ref) => {
        console.log('withLog', ref);
        return <LogWrapper {...props} forwardRef={ref} />
    })
}
