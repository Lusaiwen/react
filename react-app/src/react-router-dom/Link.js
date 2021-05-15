import React from 'react';
import ctx from '../react-router/routerContext';
import  {parsePath} from 'history'

export default function Link(props) {
    return (
        <ctx.Consumer>
            {(value) => {
                let location;
                if(typeof props.to === 'string'){
                    location = parsePath(props.to);
                }else {
                    location = props.to;
                }
                const href = value.history.createHref(location);
                return (
                    <a href={href} onClick={e => {
                        e.preventDefault();
                        value.history.push(href);
                    }}>
                        {props.children}
                    </a>
                );
            }}
        </ctx.Consumer>
    );
}
