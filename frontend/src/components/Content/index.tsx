import React from 'react';
import styles from './styles.module.scss';
import '../../styles/globals.scss';
import Sidebar from '../Sidebar';

const Content: React.FC = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.firstColumn}>
                <Sidebar></Sidebar>
            </div>
            <div className={styles.secondColumn}></div>
            <div className={styles.thirdColumn}></div>
        </div>
    );
};

export default Content;