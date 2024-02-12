import React from 'react';
import { Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './styles.module.css';

const ThemeButton: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div
      className={styles.themeButton}
      onClick={toggleTheme}>
      <Moon
        size={20}
        color="var(--text-color)"
      />
    </div>
  );
};

export default ThemeButton;
