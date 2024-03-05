import React from 'react';
import styles from './styles.module.css';
import '../../styles/globals.scss';
import Sidebar from '../Sidebar';

const Content: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftContent}>
                <Sidebar />
            </div>
            <div className={styles.centerContent}>

            </div>
            <div className={styles.rightContent}>

            </div>
        </div>
    );
};

export default Content;