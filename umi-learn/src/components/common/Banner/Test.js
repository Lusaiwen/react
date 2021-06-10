import React, { Component } from 'react'
import Banner from './index'
import src1 from './imgs/1.jpg'
import src2 from './imgs/2.jpg'
import src3 from './imgs/3.jpg'
import src4 from './imgs/4.jpg'

export default class Test extends Component {
    render() {
        return (
            <div>
                <Banner imgSrcs={[src1, src2, src3, src4]} duration={500}  autoDuration={2000} />
            </div>
        )
    }
}
