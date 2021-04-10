import React from 'react'
import './Modal.css'

export default function Modal(props) {
    if(!props.show){
        return null;
    }
    return (
        <div className="modal">
            <p>正在加载中...</p>
        </div>
    )
}
