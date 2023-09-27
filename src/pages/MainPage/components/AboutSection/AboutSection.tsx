import { FC } from 'react';
import TypingText from '../../../../components/TypingText/TypingText';
import styles from './AboutSection.module.scss';

interface IAboutSectionProps {}

const AboutSection: FC<IAboutSectionProps> = ({}) => {
	return (
		<div className={styles.aboutSection}>
			<div className={styles.innerBox}>
				<TypingText />
				<div className={styles.imgBox}></div>
			</div>
		</div>
	);
};

export default AboutSection;
