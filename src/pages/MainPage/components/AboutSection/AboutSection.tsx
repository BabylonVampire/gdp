import { FC } from 'react';
import styles from './AboutSection.module.scss';

interface IAboutSectionProps {}

const AboutSection: FC<IAboutSectionProps> = () => {
	return (
		<div className={styles.aboutSection} id="about">
			<div className={styles.innerBox}>
				<p className={styles.aboutText}>
					Команда Gafurov Production уже более 3 лет помогает бизнесу
					комплексно решить вопрос создания успешного и современного
					бренда. Наша миссия - изменить российскую digital-сферу к
					лучшему с помощью современного и оригинального подхода к
					«упаковке» бизнеса, а так же сделать возможность прокачать
					свой продукт или бренд - доступной для всех. Мы знаем как
					важно в нашей творческой сфере правильно понимать запросы
					заказчика. Цель Gafurov Production в работе с клиентами -
					правильно нарисовать цельную картину бренда, которую хотят
					получить заказчики - чтобы дальше мы понимали друг друга с
					полуслова и вместе наслаждались процессами разработки.
					<span className={styles.caret}>|</span>
				</p>
			</div>
		</div>
	);
};

export default AboutSection;
