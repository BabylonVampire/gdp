import { FC } from 'react';
import styles from './Heading.module.scss';

interface IHeadingProps {
	text: string;
	description?: string;
}

const Heading: FC<IHeadingProps> = ({ text, description }) => {
	return (
		<div className={styles.heading}>
			<div className={styles.headingWrapper}>
				<div className={styles.headingText}>{text}</div>
				{description ? (
					<div className={styles.headingDescription}>
						{description}
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default Heading;
