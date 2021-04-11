import React from 'react';
import './index.css';

export default function Modal(props) {
    const defaultProps = {
        bg: 'rgba(0,0,0,.5)',
    };
    console.log(props);
    const datas = Object.assign({}, defaultProps, props);
    console.log(datas);
    return (
        <div
            className="modal"
            style={{
                background: datas.bg,
            }}
            onClick={(e) => {
                if (e.target.className === 'modal') {
                    datas.onClose && datas.onClose();
                }
            }}
        >
            <div className="modal-center">
                {datas.children  || '正在加载中'}
            </div>
        </div>
    );
}
