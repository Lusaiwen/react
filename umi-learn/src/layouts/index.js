import React from 'react';
import Menu from '@/components/Menu'
export default function index(props) {
    return (
        <div>
            <div>
                <Menu/>
            </div>
            {props.children}
            <div>页脚</div>
        </div>
    );
}
