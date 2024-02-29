import React from 'react';
import styles from './styles.module.css';
import { Moon, Sun } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleTheme } from '@/features/theme/themeSlice';

const ThemeButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.mode);

  return (
    <div
      className={styles.themeButton}
      onClick={() => dispatch(toggleTheme())}
    >
      {theme === 'light' ? (
        <Sun
          size={20}
          color="#04070b"
        />
      ) : (
        <Moon
          size={20}
          color="#f4f7fb"
        />
      )}
    </div>
  );
};

export default ThemeButton;
