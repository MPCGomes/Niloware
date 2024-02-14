import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import HollowButton from '../HollowButton';
import FilledButton from '../FilledButton';
import ThemeButton from '../ThemeButton';
import styles from './styles.module.css';
import TabButton from '../TabButton';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const theme = useSelector((state: RootState) => state.theme.mode);

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to='/'>
                    <img
                        className={styles.logo}
                        src={theme === 'light' ? '../../nilowareBlackLogo.png' : '../../nilowareWhiteLogo.png'}
                        alt='test'
                    />
                </Link>
            </div>
            <div className={styles.tabButtons}>
                <TabButton to='/RPG' name='RPG' />
                <TabButton to='/TCG' name='TCG' />
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
