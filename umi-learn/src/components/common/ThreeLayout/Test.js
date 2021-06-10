import React, { Component } from 'react'
import ThreeLayout from './index'


export default class Test extends Component {
    render() {
        return (
            <div>
                <ThreeLayout left="左边栏" right="右边栏">
                    中间的内容
                </ThreeLayout>
            </div>
        )
    }
}
