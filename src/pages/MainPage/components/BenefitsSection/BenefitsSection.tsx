import { useEffect, useState } from 'react';
import { benefitsCards } from '../../../../db/servicesCards';
import styles from './BenefitsSection.module.scss';
import BenefitCard from './components/BenefitCard/BenefitCard';
import CardsGallery from './components/CardsGallery/CardGallery';

const BenefitsSection = () => {
	const [width, setWidth] = useState<number>(0);

	useEffect(() => {
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
							key={`benefitCard_${card.heading}`}
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
