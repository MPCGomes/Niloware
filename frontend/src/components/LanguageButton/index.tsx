import React from 'react';
import styles from './styles.module.css';
import { Globe } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const LanguageButton: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <div className={styles.themeButton}>
      <Globe size={20} color={theme === 'light' ? '#04070b' : '#f4f7fb'} />
    </div>
  );
};

export default LanguageButton;
