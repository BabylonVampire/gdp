import { FC, memo, useCallback } from 'react';
import { ICard } from '../../../../../../types/ICard';
import BenefitCard from '../BenefitCard/BenefitCard';
import styles from './CardsGallery.module.scss';

interface ICardGalleyProps {
	cardPull: ICard[];
}

const CardsGallery: FC<ICardGalleyProps> = memo(({ cardPull }) => {
	const rerenderCard = useCallback(
		(card: ICard) => {
			if (card !== undefined) {
				return (
					<BenefitCard
						key={card.heading + card.text}
						heading={card.heading}
						text={card.text}
						Icon={card.Icon}
					/>
				);
			} else {
				return <></>;
			}
		},
		[cardPull]
	);

	return (
		<div className={styles.galleriesBox}>
			<>
				<div className={styles.galleryLeft}>
					{cardPull.map((card, index) => {
						return index % 2 === 0 ? rerenderCard(card) : <></>;
					})}
				</div>
				<div className={styles.galleryRight}>
					{cardPull.map((card, index) => {
						return index % 2 === 1 ? rerenderCard(card) : <></>;
					})}
				</div>
			</>
		</div>
	);
});

export default CardsGallery;
