import { FC, useEffect, useState } from 'react';
import styles from './HeroSection.module.scss';
import GlitchedHeading from '../../../../components/GlitchedHeading/GlitchedHeading';
import RollingText from '../../../../components/RollingText/RollingText';

interface IHeroSectionProps {}

const HeroSection: FC<IHeroSectionProps> = () => {
	const [appear, setAppear] = useState<boolean>(false);
	useEffect(() => {
		setTimeout(() => {
			setAppear(true);
		}, 7000);
	}, []);
	return (
		<div className={styles.heroSection} id="home">
			<div className={styles.innerBox}>
				<div className={styles.textBox}>
					<RollingText
						text="GAFUROV"
						style={{
							fontFamily: 'var(--font-family-logo)',
						}}
					/>
					<GlitchedHeading
						style={{
							opacity: appear ? 1 : 0,
							transition: '2s',
							marginTop: '10px',
							fontFamily: 'var(--font-family-sunLogo)',
							letterSpacing: 'calc(var(--font-size-s) * 0.65)',
							color: 'var(--font-color-secondary)',
						}}
						heading="digital production"
						fontSize="calc(var(--font-size-s) * 1.2)"
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
