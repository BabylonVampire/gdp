import { FC, useEffect, useState } from 'react';
import styles from './BenefitsSection.module.scss';
import CardsGallery from './components/CardsGallery/CardGallery';
import { benefitsCards } from '../../../../db/servicesCards';
import { v4 } from 'uuid';
import BenefitCard from './components/BenefitCard/BenefitCard';

interface IBenefitsSectionProps {}

const BenefitsSection: FC<IBenefitsSectionProps> = ({}) => {
	const [width, setWidth] = useState<number>(0);

	useEffect(() => {
		console.log('benef');
		const handleResize = () => {
			setWidth(document.body.scrollWidth);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={styles.BenefitsSection}>
			{width >= 1300 ? (
				<CardsGallery cardPull={benefitsCards} />
			) : (
				<div className={styles.verticalCardContainer}>
					{benefitsCards.map((card) => (
						<BenefitCard
							key={v4()}
							heading={card.heading}
							text={card.text}
							Icon={card.Icon}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default BenefitsSection;
