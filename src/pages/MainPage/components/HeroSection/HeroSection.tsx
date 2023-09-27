import { FC } from 'react';
import styles from './HeroSection.module.scss';
import GlitchedHeading from '../../../../components/GlitchedHeading/GlitchedHeading';
import RollingText from '../../../../components/RollingText/RollingText';

interface IHeroSectionProps {}

const HeroSection: FC<IHeroSectionProps> = ({}) => {
	return (
		<div className={styles.heroSection}>
			<div className={styles.innerBox}>
				<div className={styles.textBox}>
					<RollingText />
					<GlitchedHeading
						heading="test heading"
						fontSize="calc(var(--font-size-l))"
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
