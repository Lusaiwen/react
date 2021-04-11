import React, { Component } from 'react'

export default class CheckBoxGroup extends Component {



    getCheckBoxes(){
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
