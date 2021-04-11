import React, { Component } from 'react'

export default class RadioBoxGroup extends Component {

    getRadioBoxes(){
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
