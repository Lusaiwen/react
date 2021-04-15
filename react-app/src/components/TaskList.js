import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import Task from './Task';

export default class TaskList extends PureComponent {
    static defaultProps = {
        tasks: [],
    };

    static propTypes = {
        tasks: propTypes.arrayOf(
            propTypes.shape({
                name: propTypes.string.isRequired,
                isFinish: propTypes.bool.isRequired,
            })
        ),
    };

    render() {
        console.log('TaskList render');
        const ts = this.props.tasks.map((item, i) => (
            <Task {...item} key={i}></Task>
        ));
        return <div>{ts}</div>;
    }
}
