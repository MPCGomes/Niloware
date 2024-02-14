import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../features/theme/ThemeSlice';
import { RootState } from '../../app/store';
import styles from './styles.module.css';
import { Moon } from 'lucide-react';

const ThemeButton: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <div
      className={styles.themeButton}
      onClick={() => dispatch(toggleTheme())}>
      <Moon
        size={20}
        color={theme === 'light' ? '#04070b' : '#f4f7fb'}
      />
    </div>
  );
};

export default ThemeButton;
