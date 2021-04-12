import React, { Component } from 'react'
import types from '../../../utils/commomTypes'
import PropTypes from 'prop-types'

export default class CheckBoxGroup extends Component {

    static defaultProps = {

    }

    static propTypes = {
        datas: types.datas.isRequired,
        chooseDatas: types.chooseDatas.isRequired,
        name: PropTypes.string.isRequired,
        onChange: types.onChange.isRequired
    }


    getCheckBoxes(){
        if(!this.props.datas){
            return null;
        }
        return this.props.datas.map(item => 
            (<label key={item.value}>
                <input type="checkbox" 
                    name={this.props.name}
                    value={item.value}
                    checked={this.props.chooseDatas.includes(item.value)}
                    onChange={this.handleChange}
                />
                {item.text}
            </label>)
        )
    }

    handleChange = e => {
        let newArr = [];
        if(e.target.checked){
            newArr = [...this.props.chooseDatas, e.target.value];
        }else {
            newArr = this.props.chooseDatas.filter(item => item !== e.target.value)
        }
        this.props.onChange && this.props.onChange(newArr, this.props, e);
    }


    render() {
        const checkboxes = this.getCheckBoxes();
        return (
            <div>
                {checkboxes}
            </div>
        )
    }
}
