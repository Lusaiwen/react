import React, { Component } from 'react'
import types from '../../../utils/commomTypes'
import PropTypes from 'prop-types'

export default class SelectGroup extends Component {

    static defaultProps = {

    }

    static propTypes = {
        datas: types.datas.isRequired,
        value: types.value.isRequired,
        name: types.name.isRequired,
        onChange: PropTypes.func.isRequired
    }

    getOptions(){
        return this.props.datas.map(item => 
            ( <option value={item.value} key={item.value} >{item.text}</option> )
        )
    }

    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props, e);
    }


    render() {
        const options = this.getOptions();
        return (
            <div>
                <select name={this.props.name} value={this.props.value} onChange={this.handleChange} >
                    {options}
                </select>
            </div>
        )
    }
}
