import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import styles from './styles.module.scss';
import TabButton from '@/components/TabButton';
import ThemeButton from '@/components/ThemeButton';
import Button from '@/components/Button/ShapeButton';
import { RootState } from '@/store/store';
import '../../../styles/globals.scss';
import LanguageButton from '@/components/LanguageButton';

const Header: React.FC = () => {
    const theme = useSelector((state: RootState) => state.theme.mode);

    return (
        <div className={styles.header}>
                <div className={styles.leftContent}>
                    <Link href='/'>
                        <img
                            className={styles.logo}
                            src='/nilowareWhiteLogo.png'
                            alt='Logo'
                        />
                    </Link>
                    <TabButton
                        href='/rpg'
                        name='Niloverse: RPG'
                    />
                    <TabButton
                        href='/tcg'
                        name='Niloverse: TCG'
                    />
                </div>
                <div className={styles.rightContent}>
                    <ThemeButton />
                    <LanguageButton />
                    <Button name='REGISTRAR-SE' fill='blank' />
                    <Button name='ENTRAR' fill='filled' />
                </div>
            </div>
    );
};

export default Header;
