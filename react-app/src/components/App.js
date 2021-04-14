import React, { Component } from 'react';
import WithLog from './common/hoc/WithLog';

class A extends Component {
    render() {
        return (<h1>fdsg1</h1>)
    }
}

const NewA = WithLog(A);

export default class App extends Component {
    componentDidMount() {
        console.log(this.myRef);
    }

    myRef = React.createRef();

    render() {
        return (
            <div>
                <NewA ref={this.myRef} />
            </div>
        );
    }
}
