import React, { Component } from 'react'

export default class Ball extends Component {

    constructor(props){
        super(props);
        //需要传入的参数
        //xSpeed   ySpeed  bg  left  top
        this.state = {
            left: this.props.left,
            top: this.props.top,
            xSpeed: this.props.xSpeed,
            ySpeed: this.props.ySpeed,
            bg: this.props.bg
        }

        const duration = 16;
        console.log(this.state);
        setInterval(() => {
            let newLeft = this.state.xSpeed * duration / 1000 + this.state.left;
            let newTop = this.state.ySpeed * duration / 1000 + this.state.top;

            if(newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed * 0.8
                })
            }else if(newLeft >= document.documentElement.clientWidth - this.props.width){
                newLeft = document.documentElement.clientWidth - this.props.width;
                this.setState({
                    xSpeed: -this.state.xSpeed * 0.8
                })
            }

            if(newTop <= 0) {
                newTop = 0;
                this.setState({
                    ySpeed: -this.state.ySpeed * 1.2
                })
            }else if(newTop >= document.documentElement.clientHeight - this.props.width){
                newTop =  document.documentElement.clientHeight - this.props.width;
                this.setState({
                    ySpeed: -this.state.ySpeed * 0.8
                })
            }

            this.setState({
                left: newLeft,
                top: newTop
            })
        }, duration)
    }

    render() {
        return (
            <div style={{
                width: this.props.width,
                height: this.props.width,
                borderRadius: '50%',
                position: 'fixed',
                left: this.state.left,
                top: this.state.top,
                backgroundColor: this.props.bg || '#f40'
            }}>
                
            </div>
        )
    }
}
