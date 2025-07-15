import { createSlice } from '@reduxjs/toolkit';
import { Theme } from '../../types';
import { THEME } from '../../constants/intdex';

export interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: THEME.LIGHT,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
