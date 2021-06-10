import React from 'react'
import PropTypes from 'prop-types';

export default function StudentList({ stus }) {
    const lis = stus.map(it => <li key={it.id}>{it.name}, {it.address}</li>)
    return (
        <div>
            {lis}
        </div>
    )
}


StudentList.defaultProps = {
    stus: []
}

StudentList.propTypes = {
    stus: PropTypes.array.isRequired
}
