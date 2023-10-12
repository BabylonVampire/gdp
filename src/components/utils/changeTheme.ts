import { ITheme } from '../../types/ITheme';
import { IThemeStyle } from '../../types/IThemeStyle';

export const changeTheme = (theme: ITheme) => {
	const toCSS: IThemeStyle = {
		colorMain: '--color-main',
		fontColorMain: '--font-color-main',
		colorSecondary: '--color-secondary',
		colorFrameMain: '--color-frame-main',
		colorFrameShadow: '--color-frame-shadow',
		fontColorSecondary: '--font-color-secondary',
		fontColorCode: '--font-color-code',
		fontColorCodeSecondary: '--font-color-code-secondary',
	};
	for (const variable in theme.style) {
		document.documentElement.style.setProperty(
			toCSS[variable],
			theme.style[variable]
		);
	}
};
