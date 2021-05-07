import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Aside from '../components/Aside'
import StudentLists from '../pages/student/StudentLists'
import StudentAdd from '../pages/student/StudentAdd'
import CourseLists from '../pages/course/CourseLists'
import CourseAdd from '../pages/course/CourseAdd'
import Welcome from '../pages/Welcome'
import {Route} from 'react-router-dom'

export default function Admin() {
    return (
        <div>
            <Layout header={<Header/>}  aside={<Aside/>}>
                <Route path="/" component={Welcome} exact />
                <Route path="/students"  exact component={ StudentLists} />
                <Route path="/students/add" exact  component={ StudentAdd} />
                <Route path="/courses" exact component={ CourseLists } />
                <Route path="/courses/add" exact component={CourseAdd} />
            </Layout>
        </div>
    )
}
