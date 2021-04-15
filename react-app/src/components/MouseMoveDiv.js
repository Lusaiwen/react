import React, { Component } from 'react'
import './mousemove.css'

export default class MouseMoveDiv extends Component {

    state = {
        x: 0,
        y: 0
    }

    divRef = React.createRef();

    hanldeMove = e => {
        const {left, top} = this.divRef.current.getBoundingClientRect();
        const x = e.pageX - left;
        const y = e.pageY - top;
        this.setState({
            x,
            y
        })
    }

    render() {
        return (
            <div ref={this.divRef} className="container" onMouseMove={this.hanldeMove} >
                <div style={{
                    width: 100,
                    height: 100,
                    position: 'absolute',
                    left: this.state.x - 50,
                    top: this.state.y - 50,
                    background: '#ccc'
                }}></div>
            </div>
        )
    }
}
