import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

interface TabButtonProps {
    name: string;
    href: string;
}

const TabButton: React.FC<TabButtonProps> = ({ name, href }) => {
    return (
        <Link
            className={styles.tabButton}
            href={href}
        >
            <span>
                {name}
            </span>
        </Link>
    );
};

export default TabButton;
