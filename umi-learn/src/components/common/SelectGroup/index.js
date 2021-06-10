import React, { Component } from 'react';
import types from '../../../utils/commomTypes';
import PropTypes from 'prop-types';
import WithDatasGroup from '../hoc/WithDatasGroup';

class Option extends Component {
    static defaultProps = {};

    static propTypes = {
        info: PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    };

    render() {
        return (
            <option value={this.props.info.value}>
                {this.props.info.text}
            </option>
        );
    }
}

const OptGroup = WithDatasGroup(Option);

class Select extends Component {

    static propTypes = {
        name: types.name.isRequired,
        value: types.value.isRequired,
        onChange: PropTypes.func.isRequired
    };



    render(){
        return (
            <select name={this.props.name} value={this.props.value}
            onChange={e => {
                this.props.onChange && this.props.onChange(e.target.value)
            }}
            >
                <OptGroup {...this.props}></OptGroup>
            </select>
        )
    }
}



export default Select;