import React from 'react';
import HollowButton from '../HollowButton';
import FilledButton from '../FilledButton';
import ThemeButton from '../ThemeButton';
import styles from './styles.module.css';
import TabButton from '../TabButton';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img
                    className={styles.logo}
                    src={theme === 'light' ? '../../nilowareBlackLogo.png' : '../../nilowareWhiteLogo.png'}
                    alt='test'></img>
            </div>
            <div className={styles.tabButtons}>
                <TabButton name='RPG' />
                <TabButton name='TCG' />
            </div>
            <div className={styles.utilityButtons}>
                <ThemeButton />
            </div>
            <div className={styles.authButtons}>
                <HollowButton name='Registrar' />
                <FilledButton name='Entrar' />
            </div>
        </div>
    );
};

export default Header;
