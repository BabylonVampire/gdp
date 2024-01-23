import { FC } from 'react';
import TypingText from '../../../../components/TypingText/TypingText';
import styles from './AboutSection.module.scss';

interface IAboutSectionProps {}

const AboutSection: FC<IAboutSectionProps> = () => {
	return (
		<div className={styles.aboutSection} id="about">
			<div className={styles.innerBox}>
				<TypingText
					className={styles.typingText}
					text="Мы команда специалистов предлагающая оптимальные решения в веб сфере. Мы стремимся к совершенству в каждом проекте. Мы используем современные технологии и инструменты, чтобы создавать качественные, функциональные и удобные сайты для наших клиентов. Мы умеем работать в команде и соблюдать сроки. Мы всегда готовы к новым вызовам и интересным задачам. Мы - ваше лучшее решение для разработки любого уровня"
					speed={50}
				/>
				<div className={styles.imgBox}></div>
			</div>
		</div>
	);
};

export default AboutSection;
