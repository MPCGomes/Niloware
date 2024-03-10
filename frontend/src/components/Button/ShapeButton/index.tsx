import React, { ReactNode, useState } from 'react';
import styles from './styles.module.scss';
import '../../../styles/globals.scss';



const Button: React.FC<ButtonProps> = ({ name, fill }) => {
    const buttonStyle = `${styles.button} ${styles[fill]}`;

    return (
        <button className={buttonStyle}>
            {name}
        </button>
    );
};

export default Button;
