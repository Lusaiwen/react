import React, { Component } from 'react';
import Prompt from './components/common/Prompt';

export default class Page2 extends Component {
    state = {
        val: '',
    };

    render() {
        return (
            <div>
                <Prompt
                    when={this.state.val !== ''}
                    message="确定要跳转吗，文本将会被清空"
                />
                <textarea
                    cols="30"
                    rows="10"
                    value={this.state.val}
                    onChange={(e) => {
                        this.setState({
                            val: e.target.value,
                        });
                    }}
                ></textarea>
            </div>
        );
    }
}
