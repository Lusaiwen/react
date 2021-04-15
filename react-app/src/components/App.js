import React, { PureComponent } from 'react';
import WithMouseListener from './WithMouseLisener';

function MouseMoveDiv(props) {
        console.log(props);
        return (
            <div
                style={{
                    width: 100,
                    height: 100,
                    position: 'absolute',
                    left: props.x - 50,
                    top: props.y - 50,
                    background: '#ccc',
                }}
            ></div>
        );
}




function MouseMovePoint(props){
        return (
            <>
                横坐标： {props.x} 纵坐标： {props.y}
            </>
        );
}

const MouseDiv = WithMouseListener(MouseMoveDiv);
const MousePoint = WithMouseListener(MouseMovePoint);


export default class App extends PureComponent {
    render() {
        console.log('app render');
        return (
            <div>
                <MousePoint/>
                <MouseDiv/>
            </div>
        );
    }
}
