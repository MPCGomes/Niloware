import React from 'react';
import styles from './styles.module.css';
import '../../../styles/globals.css';

const FilledButton: React.FC<{ name: string }> = ({ name }) => {
    return (
        <button className={styles.filledButton}>
            {name}
        </button>
    );
};

export default FilledButton;
