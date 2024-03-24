import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContentState {
  selectedPath: string;
}

const initialState: ContentState = {
  selectedPath: '',
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setSelectedPath: (state, action: PayloadAction<string>) => {
      state.selectedPath = action.payload;
    },
  },
});

export const { setSelectedPath } = contentSlice.actions;

export const selectSelectedPath = (state: { content: ContentState }) => state.content.selectedPath;

export default contentSlice.reducer;
