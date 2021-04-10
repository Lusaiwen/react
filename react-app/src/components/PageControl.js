import React, { Component } from 'react';
import Page from './Page';
import StudentList from './StudentList';
import Modal from './Modal';

export default class PageControl extends Component {
    state = {
        current: 1,
        total: 0,
        limit: 5,
        pannerNumber: 5,
        students: [],
        isLoading: false
    };

    constructor(props) {
        super(props);
        this.getData();
    }

    async getData(page = 1, size = 5) {
        this.setState(cur => {
            return {
                isLoading: true
            }
        })
        const resp = await fetch(
            `http://open.duyiedu.com/api/student/findByPage?appkey=17596122336_1569677773123&page=${page}&size=${size}`
        )
            .then((resp) => resp.json())
            .then((resp) => resp.data);
        console.log(resp);
        this.setState({
            students: resp.findByPage,
            total: resp.cont,
            isLoading: false,
        });
    }

    handlePageChange = (newPage) => {
        if (newPage === this.state.current) {
            return;
        }
        this.setState({
            current: newPage,
        });
        this.getData(newPage);
    };

    render() {
        return (
            <>
                <div className="container">
                    <div className="studentList">
                        <StudentList stus={this.state.students} />
                    </div>
                    <div className="page">
                        <Page
                            {...this.state}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                </div>
                <Modal show={this.state.isLoading}></Modal>
            </>
        );
    }
}
