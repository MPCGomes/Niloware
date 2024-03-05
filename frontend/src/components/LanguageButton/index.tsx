import React from 'react';
import styles from './styles.module.scss';
import { Globe } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const LanguageButton: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <div className={styles.themeButton}>
      <Globe
        size={26}
        color='#CACFD8'
      />
    </div>
  );
};

export default LanguageButton;