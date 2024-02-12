import React from 'react';
import styles from './styles.module.css';

const HollowButton: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div className={styles.hollowButton}>
            {name}
        </div>
    );
};

export default HollowButton;