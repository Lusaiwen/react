import React, {useState, useEffect} from 'react'

const ref = React.createRef();
let timer = null;


function stopTimer(){
    clearInterval(timer);
}

function MoveBlock(props){

    useEffect(() => {
        clearInterval(timer);
        const div = ref.current;
        let curTimes = 0;
        const disX = props.left / 1000;
        const disY = props.top / 1000;

        timer = setInterval(() => {
            curTimes ++;
            const newLeft = curTimes * disX;
            const newTop = curTimes * disY;
            div.style.left = newLeft + 'px';
            div.style.top = newTop + 'px';
            if(curTimes === 1000){
                div.style.left = props.left + 'px';
                div.style.top = props.top + 'px';
                clearInterval(timer);
            }
        }, 10)

        return stopTimer;
    }, [props.left, props.top]) //传入第二个参数，则会比较，如果和上次传递的参数一样，则不会变化




    return (
        <div ref={ref} style={{
            width: 100,
            height: 100,
            position: 'absolute',
            left: 0,
            top: 0,
            background: 'red'
        }}>

        </div>
    )
}


export default function App() {
    const valueX = React.createRef();
    const valueY = React.createRef();

    const [point, setPoint] = useState({
        x: 0,
        y: 0
    })
    return (
        <div style={{
            paddingTop: 100
        }}>
            X: <input type="number" ref={valueX} />
            Y: <input type="number" ref={valueY} />
            <button onClick={() => {
                console.log(valueX);
                setPoint({
                    x: valueX.current.value,
                    y: valueY.current.value
                })
            }}>移动</button>
            <MoveBlock left={point.x}  top={point.y}  />
        </div>
    )
}
