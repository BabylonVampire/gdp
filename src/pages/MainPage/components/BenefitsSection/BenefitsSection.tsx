import { FC } from 'react';
import styles from './BenefitsSection.module.scss';
import BenefitCard from './components/BenefitCard/BenefitCard';
import { skullIcon } from '../../../../db/icons/skull';

interface IBenefitsSectionProps {}

const BenefitsSection: FC<IBenefitsSectionProps> = ({}) => {
	return (
		<div className={styles.benefitsSection}>
			<div className={styles.innerBox}>
				<div className={styles.galleryLeft}>
					<BenefitCard
						heading="преимущество"
						text="asd kasjdh a kjhsa aksjdhkja kjashdjkashda kjahs kjhasdjkahs kjh"
						iconProps={{
							gradient: skullIcon.gradient,
							icon: skullIcon.icon,
						}}
					/>
					<BenefitCard
						heading="преимущество"
						text="asd kasjdh a kjhsa aksjdhkja kjashdjkashda kjahs kjhasdjkahs kjh"
						iconProps={{
							gradient: skullIcon.gradient,
							icon: skullIcon.icon,
						}}
					/>
				</div>
				<div className={styles.galleryRight}>
					<BenefitCard
						heading="преимущество"
						text="asd kasjdh a kjhsa aksjdhkja kjashdjkashda kjahs kjhasdjkahs kjh"
						iconProps={{
							gradient: skullIcon.gradient,
							icon: skullIcon.icon,
						}}
					/>
					<BenefitCard
						heading="преимущество"
						text="asd kasjdh a kjhsa aksjdhkja kjashdjkashda kjahs kjhasdjkahs kjh"
						iconProps={{
							gradient: skullIcon.gradient,
							icon: skullIcon.icon,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default BenefitsSection;
