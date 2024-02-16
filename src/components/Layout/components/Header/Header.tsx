import { FC, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Switch from '@components/Switch/Switch';
import { darkTheme } from '@db/themes/darkTheme';
import { lightTheme } from '@db/themes/lightTheme';
import { useAppDispatch } from '@store/hooks/redux';
import { themeSlice } from '@store/reducers/ThemeSlice';
import { HiOutlineMenu } from 'react-icons/hi';
import { WiDaySunny, WiMoonAltWaxingCrescent3 } from 'react-icons/wi';
import { useAppSelector } from '../../../../store/hooks/redux';
import { ILink } from '../../../../types/ILink';

interface IHeaderProps {
	links: ILink[];
	burgerState: boolean;
	burgerCallBack: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<IHeaderProps> = ({ links, burgerCallBack, burgerState }) => {
	const [switchPosition, setSwitchPosition] = useState<boolean | undefined>(
		false
	);
	const dispatch = useAppDispatch();
	const { changeTheme } = themeSlice.actions;
	const { theme } = useAppSelector((state) => state.themeReducer);

	useEffect(() => {
		setSwitchPosition(theme.id === 1);
	}, [theme]);

	const themeChanger = () => {
		if (!switchPosition) {
			dispatch(changeTheme(lightTheme));
		} else {
			dispatch(changeTheme(darkTheme));
		}
	};

	return (
		<div
			className={styles.header}
			style={{
				top: burgerState ? '-5em' : '0',
			}}
		>
			<span className={styles.flare} />
			<div className={styles.mobileDisplay}>
				<button
					className={styles.openBurger}
					onClick={() => burgerCallBack((prev) => !prev)}
				>
					<HiOutlineMenu />
				</button>
			</div>
			<div className={styles.pcDisplay}>
				<Switch
					setValue={setSwitchPosition}
					value={switchPosition}
					onClick={themeChanger}
					iconOn={<WiDaySunny />}
					iconOff={<WiMoonAltWaxingCrescent3 />}
				/>
				<div className={styles.linkBox}>
					{links.map((link) => {
						return (
							<a
								className={styles.link}
								href={link.link}
								key={`header_${link.heading}_${link.link}`}
							>
								{link.heading}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Header;
