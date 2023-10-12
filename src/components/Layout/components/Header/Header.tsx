import { FC, useState } from 'react';
import styles from './Header.module.scss';
import { ILink } from '../../../../types/ILink';
import Logo from '../../../Logo/Logo';
import { v4 } from 'uuid';
import Switch from '../../../Switch/Switch';
// import { changeTheme } from '../../../utils/changeTheme';
import { lightTheme } from '../../../../db/themes/lightTheme';
import { darkTheme } from '../../../../db/themes/darkTheme';
import { useAppDispatch } from '../../../../store/hooks/redux';
import { themeSlice } from '../../../../store/reducers/ThemeSlice';

interface IHeaderProps {
	links: ILink[];
}

const Header: FC<IHeaderProps> = ({ links }) => {
	const [switchPosition, setSwitchPosition] = useState<boolean | undefined>(
		false
	);
	const dispatch = useAppDispatch();
	const { changeTheme } = themeSlice.actions;

	const themeChanger = () => {
		if (!switchPosition) {
			dispatch(changeTheme(lightTheme));
		} else {
			dispatch(changeTheme(darkTheme));
		}
	};

	return (
		<div className={styles.header}>
			<span className={styles.flare} />
			<Switch
				setValue={setSwitchPosition}
				value={switchPosition}
				onClick={themeChanger}
			/>
			{/* <Logo /> */}
			<div className={styles.linkBox}>
				{links.map((link) => {
					return (
						<a className={styles.link} href={link.link} key={v4()}>
							{link.heading}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Header;
