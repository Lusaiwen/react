import React, { Component } from 'react';
import { Provider } from './formContext';
import FormInput from './FormInput';
import FormButton from './FormButton';

export default class Form extends Component {
    state = {
        formData: {},
        changeData: (name, value) => {
            this.setState({
                formData: {
                    ...this.state.formData,
                    [name]: value,
                },
            });
        },
        submit: () => {
            this.props.onSubmit && this.props.onSubmit(this.state.formData);
        },
    };

    render() {
        return (
            <div>
                <Provider value={this.state}>{this.props.children}</Provider>
            </div>
        );
    }
}

Form.Input = FormInput;
Form.Button = FormButton;
