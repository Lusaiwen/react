import React, { Component } from 'react'
import Ball from '../components/Ball'
import { getRandom } from './util'

export default class BallList extends Component {

    constructor(props){
        super(props);
        this.state = {
            ballList: []
        }

        const timer = setInterval(() => {
            // const item = <Ball width={100} xSpeed={400} ySpeed={400} left={100} top={100} bg='lightblue' />
            const item = {
                width: getRandom(100, 150),
                xSpeed: getRandom(50, 500),
                ySpeed: getRandom(50, 500),
                left: getRandom(100, document.documentElement.clientWidth),
                top: getRandom(100, document.documentElement.clientHeight),
                bg: `rgba(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
            }
            this.setState({
                ballList: [...this.state.ballList, item]
            })
            if(this.state.ballList.length === 10){
                clearInterval(timer);
            }
        }, 1000)
    }


    render() {
        const balls = this.state.ballList.map((item, index) => <Ball key={index} {...item} />)
        return (
            <div>
                {balls}
            </div>
        )
    }
}
