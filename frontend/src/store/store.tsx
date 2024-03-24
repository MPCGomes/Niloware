import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './contentSlice';
import { saveToCookies, loadFromCookies } from '../utils/cookieUtils';

interface ContentState {
  selectedPath: string;
}

const loadPreloadedState = (): { content: ContentState } => {
  const savedSelectedPath = loadFromCookies('selectedPath');
  return { content: { selectedPath: savedSelectedPath || '' } };
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
  const selectedPath = store.getState().content.selectedPath;
  saveToCookies('selectedPath', selectedPath);
});