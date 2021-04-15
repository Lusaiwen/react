import React, { Component } from 'react';

const ctx = React.createContext();

function ChildA(porps) {
        return (
            <>
                <h1>childA</h1>
                <ctx.Consumer>
                    {value => <>{value.a} ,{value.b}</>}
                </ctx.Consumer>
                <ChildB />
            </>
        );
}

class ChildB extends Component {
    static contextType = ctx;

    render() {
        return (
            <>
                <h1>childB</h1>;
                <h1>来自上下文a:{this.context.a}  b: {this.context.b}</h1>
                <button onClick={() => {
                    this.context.ChangeA(this.context.a + 2)
                }}>子组件控制a+2</button>
            </>
        );
    }
}

export default class App extends Component {
    state = {
        a: 1234,
        b: 'abc',
        ChangeA: newA => {
            this.setState({
                a: newA
            })
        }
    };
    render() {
        return (
            <ctx.Provider value={this.state}>
                <div>
                    <h1>父组件a:{this.state.a}  b: {this.state.b}</h1>
                    <ChildA></ChildA>
                    <button onClick={() => {
                        this.setState({
                            a: this.state.a + 1
                        })
                    }}>a+1</button>
                </div>
            </ctx.Provider>
        );
    }
}
