import { FC } from 'react';
import GlitchedHeading from '../../../../components/GlitchedHeading/GlitchedHeading';
import styles from './HeroSection.module.scss';

interface IHeroSectionProps {}

const HeroSection: FC<IHeroSectionProps> = () => {
	return (
		<div className={styles.heroSection} id="home">
			<div className={styles.innerBox}>
				<div className={styles.animationBox}>
					<video className={styles.animation} autoPlay muted loop>
						<source
							src="/src/assets/animation.mp4"
							type="video/mp4"
						/>
					</video>
				</div>
				<div className={styles.textBox}>
					<div className={styles.background} />
					<GlitchedHeading
						heading="GAFUROV"
						style={{
							fontSize: 'var(--font-size-xl)',
							textShadow: '0 0 8px white',
							fontFamily: 'var(--font-family-logo)',
						}}
					/>
					<p className={styles.subHeading}>digital production</p>
					<div className={styles.descriptionBox}>
						<p className={styles.description}>
							Команда Gafurov Production уже более 3 лет помогает
							бизнесу комплексно решить вопрос создания успешного
							и современного бренда.
						</p>
						<div className={styles.buttonBox}>
							<button className={styles.openFormButton}>
								Оставить заявку
							</button>
							<button className={styles.contactsButton}>
								Связь с нами
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
