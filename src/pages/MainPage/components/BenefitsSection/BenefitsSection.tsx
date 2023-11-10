import { FC } from 'react';
import styles from './BenefitsSection.module.scss';
import CardsGallery from './components/CardsGallery/CardGallery';
import { benefitsCards } from '../../../../db/servicesCards';

interface IBenefitsSectionProps {}

const BenefitsSection: FC<IBenefitsSectionProps> = ({}) => {
	return (
		<div className={styles.BenefitsSection}>
			<CardsGallery cardPull={benefitsCards} />
		</div>
	);
};

export default BenefitsSection;
