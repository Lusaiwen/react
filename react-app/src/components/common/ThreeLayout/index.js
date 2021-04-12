import React  from 'react';
import types from '../../../utils/commomTypes'
import './index.css';


ThreeLayout.defaultProps = {
    leftWidth: 200,
    rightWidth: 200,
    minWidth: 800,
    gap: 50
}


ThreeLayout.propTypes = {
    leftWidth: types.leftWidth,
    rightWidth: types.rightWidth,
    minWidth: types.minWidth,
    gap: types.gap,
    left: types.left,
    right: types.right,
    children: types.children
}

export default function ThreeLayout(props) {
    console.log(props);
    return (
        <div className="three-layout" style={{
            minWidth: props.minWidth
        }}>
            <div className="main">
                {props.children}
            </div>
            <div className="aside-left" style={{
                width: props.leftWidth,
                marginRight: props.gap
            }}>{props.left}</div>
            <div className="aside-right" style={{
                width: props.rightWidth,
                marginLeft: props.gap
            }}>{props.right}</div>
        </div>
    );
}
