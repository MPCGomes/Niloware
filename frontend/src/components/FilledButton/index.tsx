import React from 'react';
import styles from './styles.module.css';

const FilledButton: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div className={styles.filledButton}>
            {name}
        </div>
    );
};

export default FilledButton;