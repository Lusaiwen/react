import React, { Component } from 'react'

export default class SelectGroup extends Component {

    getOptions(){
        console.log("select",this.props);
        return this.props.datas.map(item => 
            ( <option value={item.value} key={item.value} >{item.text}</option> )
        )
    }

    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props, e);
    }


    render() {
        const options = this.getOptions();
        console.log(options);
        return (
            <div>
                <select name={this.props.name} value={this.props.value} onChange={this.handleChange} >
                    {options}
                </select>
            </div>
        )
    }
}
