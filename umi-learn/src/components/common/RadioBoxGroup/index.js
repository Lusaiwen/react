import React, { Component } from 'react';
import types from '../../../utils/commomTypes';
import WithDatasGroup from '../hoc/WithDatasGroup';
import PropTypes from 'prop-types'

class Radio extends Component {
    static propTypes = {
        value: types.value.isRequired,
        name: types.name.isRequired,
        onChange: types.onChange.isRequired,
        info: PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    };

    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props, e);
    }
    render() {
        return (
            <label key={this.props.value}>
                <input
                    type="radio"
                    name={this.props.name}
                    value={this.props.info.value}
                    onChange={this.handleChange}
                    checked={this.props.info.value === this.props.value}
                />
                {this.props.info.text}
            </label>
        );
    }
}

export default WithDatasGroup(Radio);
