import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

interface TabButtonProps {
    name: string;
    to: string;
}

const TabButton: React.FC<TabButtonProps> = ({ name, to }) => {
    return (
        <Link
            className={styles.tabButton}
            to={to}
        >
            {name}
        </Link>
    );
};

export default TabButton;