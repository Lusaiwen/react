import React, { Component } from 'react';
import types from '../../../utils/commomTypes';
import PropTypes from 'prop-types';
import WithDatasGroup from './hoc/WithDatasGroup';

class CheckBox extends Component {
    static propTypes = {
        info: PropTypes.shape({
            value: PropTypes.string,
            text: PropTypes.string,
        }),
        chooseDatas: types.chooseDatas.isRequired,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    };

    handleChange = (e) => {
        let newArr = null;
        if (e.target.checked) {
            newArr = [...this.props.chooseDatas, e.target.value];
        } else {
            newArr = this.props.chooseDatas.filter(
                (item) => item !== e.target.value
            );
        }
        this.props.onChange && this.props.onChange(newArr, this.props, e);
    };

    render() {
        return (
            <label>
                <input
                    type="checkbox"
                    name={this.props.name}
                    value={this.props.info.value}
                    checked={this.props.chooseDatas.includes(
                        this.props.info.value
                    )}
                    onChange={this.handleChange}
                />
                {this.props.info.text}
            </label>
        );
    }
}


export default WithDatasGroup(CheckBox);


