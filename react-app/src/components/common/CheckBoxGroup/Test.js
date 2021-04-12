import React, { Component } from 'react';
import CheckBoxGroup from './index';

export default class Test extends Component {
    state = {
        datas: [
            { value: 'football', text: '足球' },
            { value: 'basketball', text: '篮球' },
            { value: 'movie', text: '电影' },
            { value: 'music', text: '音乐' },
            { value: 'other', text: '其他' },
        ],
        chooseDatas: [],
        name: 'loves',
    };

    render() {
        return (
            <div>
                <CheckBoxGroup
                    // {...this.state}
                    onChange={(newArr) => {
                        this.setState({
                            chooseDatas: newArr,
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
