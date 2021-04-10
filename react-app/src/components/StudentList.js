import React from 'react'
import Student from './Student'

export default function StudentList(props) {
    const stus = props.stus.map((item, index) => <Student {...item} key={index}  />)
    return (
        <ul>
            {stus}
        </ul>
    )
}
