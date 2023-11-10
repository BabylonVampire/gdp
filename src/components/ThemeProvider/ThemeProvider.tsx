import { FC, PropsWithChildren, useEffect } from 'react';
import { useAppSelector } from '../../store/hooks/redux';
import styles from './ThemeProvider.module.scss';
import { changeTheme } from '../utils/changeTheme';

interface IThemeProviderProps {}

const ThemeProvider: FC<PropsWithChildren<IThemeProviderProps>> = ({
	children,
}) => {
	const { theme } = useAppSelector((state) => state.themeReducer);

	useEffect(() => {
		changeTheme(theme);
	}, [theme]);

	return (
		<div
			className={styles.themeProvider}
			style={{
				backdropFilter: theme.id === 0 ? 'invert(0)' : 'invert(1)',
			}}
		>
			{children}
		</div>
	);
};

export default ThemeProvider;
