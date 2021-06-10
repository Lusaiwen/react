import React, { Component } from 'react'
import './index.css'
import propTypes from 'prop-types'

export default class SwitchDot extends Component {


    static propTypes = {
        total: propTypes.number.isRequired,
        curIndex : propTypes.number.isRequired,
        onChange: propTypes.func
    }

    handle

    render() {
        let spans = [];
        for(let i = 0; i < this.props.total; i ++){
            spans.push((
                <span key={i} className={i === this.props.curIndex ? "active" : ""} 
                onClick={() => {
                    this.props.onChange && this.props.onChange(i);
                }}></span>
            ))
        }

        return (
            <div className="dots">
                {spans}
            </div>
        )
    }
}
