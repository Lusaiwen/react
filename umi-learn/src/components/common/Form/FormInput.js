import React, { Component } from 'react';
import propTypes from 'prop-types';
import ctx from './formContext';

export default class FormInput extends Component {
    static defaultProps = {
        type: 'text',
    };

    static contextType = ctx;

    static propTypes = {
        type: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
    };

    render() {

        return (
            <input
                value={this.context.formData[this.props.name] || ""}
                onChange={e => {
                    this.context.changeData(this.props.name, e.target.value)
                }}
                type={this.props.type}
            />
        );
    }
}
