import React, { Component } from 'react'
import './mousemove.css'

export default class MouseListener extends Component {

    state = {
        x: 0,
        y: 0
    }

    divRef = React.createRef();

    hanldeMove = e => {
        const {left, top} = this.divRef.current.getBoundingClientRect();
        const x = parseInt(e.pageX - left);
        const y = parseInt(e.pageY - top);
        this.setState({
            x,
            y
        })
    }

    


    render() {
        return (
            <div ref={this.divRef} onMouseMove={this.hanldeMove} className="container" >
                {this.props.children(this.state)}
            </div>
        )
    }
}
