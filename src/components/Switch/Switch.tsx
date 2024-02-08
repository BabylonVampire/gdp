import { Dispatch, FC, SetStateAction } from 'react';
import styles from './Switch.module.scss';

interface ISwitchProps {
	onClick?: () => void;
	value?: boolean;
	setValue?: Dispatch<SetStateAction<boolean | undefined>>;
	iconOn?: React.ReactNode;
	iconOff?: React.ReactNode;
}

const Switch: FC<ISwitchProps> = ({
	onClick,
	iconOn,
	iconOff,
	value,
	setValue,
}) => {
	const switchFunc = () => {
		if (onClick) {
			onClick();
		}
		if (setValue) {
			setValue((prev) => !prev);
		}
	};
	return (
		<div className={styles.switchWrapper}>
			<div className={styles.iconWrapper}>{iconOff}</div>
			<div className={styles.switch}>
				<div className={styles.switchInner} onClick={switchFunc}>
					<div
						className={styles.circle}
						style={{
							right: `${value ? -2.2 : -0.3}em`,
							transition: '0.3s',
						}}
					/>
				</div>
			</div>
			<div className={styles.iconWrapper}>{iconOn}</div>
		</div>
	);
};

export default Switch;
