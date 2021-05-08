import React, {Component} from 'react'
import reset from './resetScroll'


export default function WithScroll(Comp) {
    return class Scroll extends Component {
        componentDidMount(){
            reset();
        }

        render(){
            return <Comp {...this.props} />
        }
    }
}

