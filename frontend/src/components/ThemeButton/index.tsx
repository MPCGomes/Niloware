import React from 'react';
import styles from './styles.module.scss';
import { Moon, Sun } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleTheme } from '@/features/theme/themeSlice';

const ThemeButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.mode);
  const iconColor = "#CACFD8"
  
  return (
    <div
      className={styles.themeButton}
      onClick={() => dispatch(toggleTheme())}
    >
      {theme === 'light' ? (
        <Sun
          size={26}
          color= {iconColor}
        />
      ) : (
        <Moon
          size={26}
          color= {iconColor}
        />
      )}
    </div>
  );
};

export default ThemeButton;
