import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import TabButton from '@/components/TabButton';
import ThemeButton from '@/components/ThemeButton';
import Modal from '../../Modal/Modal';
import '../../../styles/globals.scss';
import LanguageButton from '@/components/LanguageButton';
import LoginModal from '../../Modal/LoginModal/LoginModal'
import RegisterModal from '../../Modal/RegisterModal/Register'

const Header: React.FC = () => {

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
                    <ThemeButton/>
                    <LanguageButton />
                    <RegisterModal/>
                    <LoginModal/>
                </div>
            </div>
    );
};

export default Header;
