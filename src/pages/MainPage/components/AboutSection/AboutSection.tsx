import { FC } from 'react';
import TypingText from '../../../../components/TypingText/TypingText';
import styles from './AboutSection.module.scss';

interface IAboutSectionProps {}

const AboutSection: FC<IAboutSectionProps> = ({}) => {
	return (
		<div className={styles.aboutSection} id="about">
			<div className={styles.innerBox}>
				<TypingText
					text="Война за независимость Сомалиленда (сомал. Dagaalkii Xoraynta Soomaaliland, букв. Сомалилендская освободительная война) — восстание, развязанное Сомалийским национальным движением (СНД)"
					speed={50}
				/>
				<div className={styles.imgBox}></div>
			</div>
		</div>
	);
};

export default AboutSection;
