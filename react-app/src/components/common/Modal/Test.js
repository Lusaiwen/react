import React, { Component } from 'react'
import Modal from './index'
export default class Test extends Component {

    render() {
        return (
            <div>
                <Modal bg='rgba(0, 255, 255, 0.5)'
                 onClose={() => {
                     console.log('关闭');
                 }}
                ></Modal>
            </div>
        )
    }
}
