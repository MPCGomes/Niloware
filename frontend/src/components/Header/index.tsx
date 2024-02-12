import React from 'react';
import HollowButton from '../HollowButton';
import FilledButton from '../FilledButton';
import ThemeButton from '../ThemeButton';
import styles from './styles.module.css';

const Header: React.FC = () => {

    return (
        <div className={styles.header}>
            <div className={styles.logo}>

            </div>
            <div className={styles.tabButtons}>

            </div>
            <div className={styles.utilsButtons}>
                <ThemeButton />
            </div>
            <div className={styles.accountButtons}>
                <HollowButton />
                <FilledButton />
            </div>
        </div>
    );
};

export default Header;
