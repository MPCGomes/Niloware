import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './contentSlice';

const loadPreloadedState = (): { content: { selectedPath: string } } => {
  try {
    const savedSelectedPath = localStorage.getItem('selectedPath');
    if (savedSelectedPath === null) {
      return { content: { selectedPath: '' } };
    }
    return { content: { selectedPath: savedSelectedPath } };
  } catch (error) {
    console.error('Failed to load state from localStorage:', error);
    return { content: { selectedPath: '' } };
  }
};

export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
  preloadedState: loadPreloadedState(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('selectedPath', state.content.selectedPath);
  } catch (error) {
    console.error('Failed to save state to localStorage:', error);
  }
});
