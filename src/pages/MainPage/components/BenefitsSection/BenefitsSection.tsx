import { FC } from 'react';
import styles from './BenefitsSection.module.scss';
import BenefitCard from './components/BenefitCard/BenefitCard';

interface IBenefitsSectionProps {}

const BenefitsSection: FC<IBenefitsSectionProps> = ({}) => {
	return (
		<div className={styles.benefitsSection}>
			<div className={styles.innerBox}>
				<div className={styles.galleryLeft}>
					<BenefitCard />
				</div>
				<div className={styles.galleryRight}>
					<BenefitCard />
				</div>
			</div>
		</div>
	);
};

export default BenefitsSection;
