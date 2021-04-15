import React, { Component } from 'react';
// import MouseMoveDiv from './MouseMoveDiv';
// import MousePoint from './MousePoint';
import MouseListener from './MouseListener';

export default class App extends Component {
    moveDiv = (mouse) => {
        console.log(mouse);
        return (
                <div
                    style={{
                        width: 100,
                        height: 100,
                        position: 'absolute',
                        left: mouse.x - 50,
                        top: mouse.y - 50,
                        background: '#ccc',
                    }}
                ></div>
        );
    };

    movePoint = mouse => {
        return (
            <>
        横坐标： {mouse.x} 纵坐标： {mouse.y}
            </>
        )
    }

    render() {
        console.log('app render');
        return (
            <div>
                <MouseListener>
                    {this.moveDiv}
                </MouseListener>
                <MouseListener>
                    {this.movePoint}
                </MouseListener>
            </div>
        );
    }
}
