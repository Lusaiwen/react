import React from 'react';
import { CSSTransition } from 'react-transition-group';
import propTypes from 'prop-types';
import './index.css'

FadeTransition.defaultProps = {
    timeout: 500,
};

FadeTransition.propTypes = {
    timeout: propTypes.number,
};

export default function FadeTransition(props) {

    function addTransition(node){
        node.style.transition = `opacity ${props.timeout}ms`
    }

    function removeTransition(node){
        node.style.transition = "";
    }

    
    return <CSSTransition {...props} timeout={props.timeout} classNames="fade"
        onEnter={addTransition}
        onEntered={node => {
            removeTransition(node);
            props.onEntered && props.onEntered(node);
        }}
        onExit={addTransition}
        onExited={node => {
            removeTransition(node);
            props.onExited && props.onExited(node);
        }}
    />;
}
