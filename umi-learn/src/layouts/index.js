import React from 'react';
import Layout from '../components/Layout';
import MenuContainer from '../components/containers/MenuContainer';
import Aside from '../components/Aside';
import styles from './index.css';
export default function index(props) {
    if (props.location.pathname === '/login') {
        return props.children;
    }
    return (
        <Layout
            header={<MenuContainer />}
            aside={<Aside />}
            main={<div className={styles.main}>{props.children}</div>}
        />
    );
}
