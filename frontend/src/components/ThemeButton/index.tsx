import React from 'react';
import styles from './styles.module.scss';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const iconColor = '#CACFD8';

  return (
    <div
      className={styles.themeButton}
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <Sun
          size={26}
          color={iconColor}
        />
      ) : (
        <Moon
          size={26}
          color={iconColor}
        />
      )}
    </div>
  );
};

export default ThemeButton;
