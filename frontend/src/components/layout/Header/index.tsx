import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import styles from './styles.module.css';
import TabButton from '@/components/TabButton';
import ThemeButton from '@/components/ThemeButton';
import HollowButton from '@/components/Button/HollowButton';
import FilledButton from '@/components/Button/FilledButton';
import { RootState } from '@/store/store';
import '../../../styles/globals.css';

const Header: React.FC = () => {
    const theme = useSelector((state: RootState) => state.theme.mode);

    return (
        <div className={styles.header}>
            <div>
                <Link href='/'>
                    <img
                    className={styles.logo}
                        src={theme === 'light' ? '/nilowareBlackLogo.png' : '/nilowareWhiteLogo.png'}
                        alt='Logo'
                    />
                </Link>
            </div>
            <div className={styles.tabButtons}>
                <TabButton href='/rpg' name='RPG' />
                <TabButton href='/tcg' name='TCG' />
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
