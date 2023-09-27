import { FC } from 'react';
import styles from './VerticalProgressBar.module.scss';

interface IVerticalProgressBarProps {}

const VerticalProgressBar: FC<IVerticalProgressBarProps> = ({}) => {
	return (
		<div className={styles.verticalProgressBar}>
			<div className={styles.innerBox}>
				<div className={styles.pointsBox}></div>
				<div className={styles.barLine}>
					<div className={styles.activeBarLine}></div>
				</div>
				<div className={styles.descriptionsBox}></div>
			</div>
		</div>
	);
};

export default VerticalProgressBar;
