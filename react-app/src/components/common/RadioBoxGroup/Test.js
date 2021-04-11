import React, { Component } from 'react';
import CheckBox from './index';

export default class Test extends Component {
    state = {
        datas: [
            { value: 'football', text: '足球' },
            { value: 'basketball', text: '篮球' },
            { value: 'movie', text: '电影' },
            { value: 'music', text: '音乐' },
            { value: 'other', text: '其他' },
        ],
        value: '',
        name: 'loves',
    };

    render() {
        return (
            <div>
                <CheckBox
                    {...this.state}
                    onChange={(newValue) => {
                        this.setState({
                            value: newValue,
                        });
                    }}
                />
                <button
                    onClick={() => {
                        console.log(this.state);
                    }}
                >
                    当前状态
                </button>
            </div>
        );
    }
}
