import React, { useState } from 'react';
import styles from './styles.module.css';
import '../../../styles/globals.scss';

const Button: React.FC<{ name: string; fill: string }> = ({ name, fill }) => {
    // const backgroundColor = fill === 'fill' ? '#0f1922' : '#CACFD8'
    const buttonClassName = `${styles.button} ${fill === 'filled' ? styles.filled : styles.blank}`;

    return (
        <button className={buttonClassName}>
            {name}
        </button>
    );
};

export default Button;
