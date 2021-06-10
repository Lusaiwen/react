import React, { Component } from 'react';
import Modal from './index';

export default class Test extends Component {
    state = {
        show: false,
    };

    showModal = () => {
        this.setState({
            show: true,
        });
    }

    hideModal= () => {
        this.setState({
            show: false,
        });
    }

    render() {
        return (
            <div>
                <img
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic3.16pic.com%2F00%2F01%2F11%2F16pic_111395_b.jpg&refer=http%3A%2F%2Fpic3.16pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620716955&t=e6f1589e84d6f7648b7f4f91d689e0a0"
                    alt=""
                />
                {this.state.show ? (
                    <Modal bg="rgba(0, 0, 0, .5)" onClose={() => {
                        this.hideModal();
                    }}>
                        <div
                            style={{
                                background: '#fff',
                            }}
                        >
                            <h1>居中gdfgfdhfdhfdhfdhfdh</h1>
                            <button
                                onClick={() => {
                                    this.hideModal();
                                }}
                            >
                                关闭朦层
                            </button>
                        </div>
                    </Modal>
                ) : null}

                <button
                    onClick={() => {
                        this.showModal();
                    }}
                >显示朦层</button>
            </div>
        );
    }
}
