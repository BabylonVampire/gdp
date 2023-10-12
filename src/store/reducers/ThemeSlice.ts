import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITheme } from '../../types/ITheme';
import { darkTheme } from '../../db/themes/darkTheme';

interface ThemeState {
	theme: ITheme;
}

const initialState: ThemeState = {
	theme: darkTheme,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		changeTheme(state, action: PayloadAction<ITheme>) {
			state.theme = action.payload;
		},
	},
});

export default themeSlice.reducer;
