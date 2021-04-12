import React from 'react';
import types from '../../../utils/commomTypes'
import PropTypes from 'prop-types'
import './index.css';


Modal.defaultProps = {
    bg: 'rgba(0,0,0,.5)',
    children: '正在加载中'
}

Modal.propTypes = {
    bg: PropTypes.string,
    children: PropTypes.node,
    onClose: types.onClose.isRequired
}



export default function Modal(props) {
    return (
        <div
            className="modal"
            style={{
                background: props.bg,
            }}
            onClick={(e) => {
                if (e.target.className === 'modal') {
                    props.onClose && props.onClose();
                }
            }}
        >
            <div className="modal-center">
                {props.children}
            </div>
        </div>
    );
}


