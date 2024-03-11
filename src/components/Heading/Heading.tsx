import { FC } from 'react';
import styles from './Heading.module.scss';

interface IHeadingProps {
	text: string;
	link?: string;
}

const Heading: FC<IHeadingProps> = ({ text, link }) => {
	return (
		<div className={styles.heading} id={link}>
			<div className={styles.headingWrapper}>
				<div className={styles.headingText}>{text}</div>
				<div className={styles.divider} />
			</div>
		</div>
	);
};

export default Heading;
