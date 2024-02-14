import React from 'react';
import styles from './styles.module.css';

const HollowButton: React.FC<{ name: string }> = ({ name }) => {
    return (
        <button className={styles.hollowButton}>
            {name}
        </button>
    );
};

export default HollowButton;
