import { FC } from 'react';
import GlitchedHeading from '../../../../components/GlitchedHeading/GlitchedHeading';
import styles from './HeroSection.module.scss';

interface IHeroSectionProps {}

const HeroSection: FC<IHeroSectionProps> = () => {
	return (
		<div className={styles.heroSection} id="home">
			<div className={styles.innerBox}>
				<div className={styles.textBox}>
					<GlitchedHeading
						heading="GAFUROV"
						style={{
							fontSize: 'var(--font-size-xl)',
							textShadow: '0 0 8px white',
							fontFamily: 'var(--font-family-logo)',
						}}
					/>
					<p className={styles.subHeading}>digital production</p>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
