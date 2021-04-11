import React, { Component } from 'react';
import ThreeLayout from './common/ThreeLayout';

export default class App extends Component {
    render() {
        return (
            <div
                style={{
                    width: '100%',
                    height: 500,
                    minWidth: 600,
                }}
            >
                <ThreeLayout
                    minWidth={500}
                    leftwidth={300}
                    rightwidth={300}
                    gb={100}
                    left={
                        <h1 style={{
                            border: "1px solid #000"
                        }}>左页面</h1>
                    }
                    right={
                        <h1>右页面</h1>
                    }
                >
                    <h1>主区域</h1>
                </ThreeLayout>
            </div>
        );
    }
}
