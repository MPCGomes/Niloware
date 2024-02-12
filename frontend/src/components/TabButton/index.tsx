import React from 'react';
import styles from './styles.module.css';

const TabButton: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div className={styles.tabButton}>
            {name}
        </div>
    );
};

export default TabButton;