import React from 'react';
import styles from './styles.module.scss';
import { Globe } from 'lucide-react';

const LanguageButton: React.FC = () => {

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
