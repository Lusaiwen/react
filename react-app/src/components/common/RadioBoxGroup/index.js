import React, { Component } from 'react'
import types from '../../../utils/commomTypes'
import PropTypes from 'prop-types'

export default class RadioBoxGroup extends Component {

    static defaultProps = {

    }

    static propTypes = {
        datas: types.datas.isRequired,
        value: types.value.isRequired,
        name: types.name.isRequired,
        onChange: PropTypes.func.isRequired
    }

    getRadioBoxes(){
        if(!this.props.datas) {
            return null;
        }
        return this.props.datas.map(item => 
            (<label key={item.value}>
                <input type="radio" 
                    name={this.props.name}
                    value={item.value}
                    onChange={this.handleChange}
                />
                {item.text}
            </label>)
        )
    }

    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props, e);
    }


    render() {
        const checkboxes = this.getRadioBoxes();
        return (
            <div>
                {checkboxes}
            </div>
        )
    }
}
