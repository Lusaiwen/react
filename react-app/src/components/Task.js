import React  from 'react';
import propTypes from 'prop-types';
import './Task.css';
// import {equalsObject} from '../utils/equalsObject'

function Task(props) {
    return (
        <li className={props.isFinish ? 'finish' : ''}>
            {props.name}
        </li>
    );
}

Task.propTypes = {
    name: propTypes.string.isRequired,
    isFinish: propTypes.bool.isRequired
};

export default React.memo(Task);