import { benefitsCards } from '../../../../db/servicesCards';
import styles from './BenefitsSection.module.scss';
import BenefitCard from './components/BenefitCard/BenefitCard';

const BenefitsSection = () => {
	return (
		<div className={styles.BenefitsSection}>
			<div className={styles.verticalCardContainer}>
				{benefitsCards.map((card) => (
					<BenefitCard
						key={`benefitCard_${card.heading}`}
						heading={card.heading}
						text={card.text}
						Icon={card.Icon}
					/>
				))}
			</div>
		</div>
	);
};

export default BenefitsSection;
