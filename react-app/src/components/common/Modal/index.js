import React from 'react';
import './index.css';

export default function Modal(props) {
    let defaultProps = {
        bg: 'rgba(0,0,0,.5)',
    };
    let datas = { ...defaultProps, ...props };

    return (
        <div
            className="modal"
            style={{
                background: datas.bg,
            }}
            onClick={(e) => {
                if (e.target.className === 'modal') {
                    datas.onClose();
                }
            }}
        >
            <div className="modal-center">
                {datas.children  || '正在加载中'}
            </div>
        </div>
    );
}
