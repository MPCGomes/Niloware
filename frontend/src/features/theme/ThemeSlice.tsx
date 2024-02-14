import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeMode = 'light' | 'dark';

const savedTheme = localStorage.getItem('theme') as ThemeMode | null;

const initialState = {
  mode: savedTheme || 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      const newTheme = state.mode === 'light' ? 'dark' : 'light';
      state.mode = newTheme;
      localStorage.setItem('theme', newTheme);
    },
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
