import { FC, useEffect, useState } from 'react';
import styles from './HeroSection.module.scss';
import GlitchedHeading from '../../../../components/GlitchedHeading/GlitchedHeading';
import RollingText from '../../../../components/RollingText/RollingText';

interface IHeroSectionProps {}

const HeroSection: FC<IHeroSectionProps> = ({}) => {
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
					<RollingText text="GAFUROV" />
					<GlitchedHeading
						style={{
							opacity: appear ? 1 : 0,
							transition: '2s',
						}}
						heading="digital production"
						fontSize="calc(var(--font-size-l) * 0.68)"
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
