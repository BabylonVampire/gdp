import { FC, useEffect, useState } from 'react';
import styles from './BurgerMenu.module.scss';
import { ILink } from '../../../../../types/ILink';
import { useAppDispatch } from '@store/hooks/redux';
import { themeSlice } from '@store/reducers/ThemeSlice';
import { lightTheme } from '@db/themes/lightTheme';
import { darkTheme } from '@db/themes/darkTheme';
import Switch from '@components/Switch/Switch';
import { WiMoonAltWaxingCrescent3, WiDaySunny } from 'react-icons/wi';
import { useAppSelector } from '../../../../../store/hooks/redux';

interface IBurgerMenuProps {
	links: ILink[];
	state: boolean;
	setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ links, state, setState }) => {
	const [switchPosition, setSwitchPosition] = useState<boolean | undefined>(
		false
	);
	const { theme } = useAppSelector((state) => state.themeReducer);

	useEffect(() => {
		setSwitchPosition(theme.id === 1);
	}, [theme]);
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
		<div
			className={styles.BurgerMenu}
			style={{
				right: state ? '0' : '-50vw',
			}}
		>
			<div className={styles.innerBox}>
				<div className={styles.linkBox}>
					<div className={styles.heading}>Навигация</div>
					<div className={styles.divider} />
					{links.map((link) => {
						return (
							<a
								href={link.link}
								className={styles.link}
								onClick={() => setState((prev) => !prev)}
							>
								{link.heading}
							</a>
						);
					})}
				</div>
				<Switch
					setValue={setSwitchPosition}
					value={switchPosition}
					onClick={themeChanger}
					iconOn={<WiDaySunny />}
					iconOff={<WiMoonAltWaxingCrescent3 />}
				/>
			</div>
		</div>
	);
};

export default BurgerMenu;
