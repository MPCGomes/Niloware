import React, { useState } from 'react';
import styles from './styles.module.scss';
import '../../../styles/globals.scss';

const Button: React.FC<{ name: string; fill: 'filled' | 'blank' }> = ({ name, fill }) => {
    const buttonStyle = `${styles.button} ${styles[fill]}`;

    return (
        <button className={buttonStyle}>
            {name}
        </button>
    );
};

export default Button;
