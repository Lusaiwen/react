import React, { Component } from 'react'

export default class MousePoint extends Component {

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
            <div ref={this.divRef} className="container" onMouseMove={this.hanldeMove}>
                横坐标：{parseInt(this.state.x)}  纵坐标：{parseInt(this.state.y)}
             </div>
        )
    }
}
