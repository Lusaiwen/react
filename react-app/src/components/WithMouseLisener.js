import React, { Component } from 'react';
import './mousemove.css';

export default function WithMouseListener(Comp) {
    return class WithMouseListener extends Component {
        state = {
            x: 0,
            y: 0,
        };

        divRef = React.createRef();

        hanldeMove = (e) => {
            console.log(this.divRef);
            const { left, top } = this.divRef.current.getBoundingClientRect();
            const x = parseInt(e.pageX - left);
            const y = parseInt(e.pageY - top);
            this.setState({
                x,
                y,
            });
        };

        render() {
            return <div className="container" ref={this.divRef} onMouseMove={this.hanldeMove}>
                <Comp {...this.state}/>
            </div>;
        }
    };
}
