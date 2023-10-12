import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { WiMoonAltWaxingCrescent3, WiDaySunny } from 'react-icons/wi';
import styles from './Switch.module.scss';

interface ISwitchProps {
	onClick?: () => void;
	value?: boolean;
	setValue?: Dispatch<SetStateAction<boolean | undefined>>;
	defaultState?: boolean;
	iconOn?: React.ReactNode;
	iconOff?: React.ReactNode;
}

const Switch: FC<ISwitchProps> = ({
	onClick,
	defaultState,
	iconOn,
	iconOff,
	value,
	setValue,
}) => {
	useEffect(() => {
		if (!defaultState) {
			defaultState = false;
		}
	}, [defaultState]);

	if (!setValue) {
		[value, setValue] = useState(defaultState);
	}
	const switchFunc = () => {
		if (onClick) {
			onClick();
		}
		if (setValue) {
			setValue((prev) => !prev);
		}
	};
	return (
		<div className={styles.switch}>
			<div className={styles.switchInner} onClick={switchFunc}>
				<div
					className={styles.circle}
					style={{
						right: `${value ? -2.5 : 0}em`,
					}}
				>
					{value ? <WiDaySunny /> : <WiMoonAltWaxingCrescent3 />}
				</div>
			</div>
		</div>
	);
};

export default Switch;
