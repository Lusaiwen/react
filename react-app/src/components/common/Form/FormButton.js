import React from 'react';
import { Consumer } from './formContext';

export default function FormButton(props) {
    return (
        <Consumer>
            {(ctx) => {
                console.log(props);
                return (<button
                    onClick={() => {
                        ctx.submit();
                    }}
                >
                    {props.children}
                </button>);
            }}
        </Consumer>
    );
}
