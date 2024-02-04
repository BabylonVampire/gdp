import { FC, memo, useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { ICard } from '../../../../../../types/ICard';
import BenefitCard from '../BenefitCard/BenefitCard';
import styles from './CardsGallery.module.scss';

interface ICardGalleyProps {
	cardPull: ICard[];
}

const CardsGallery: FC<ICardGalleyProps> = memo(({ cardPull }) => {
	const rerenderCard = useCallback(
		(card: ICard) => {
			const [curCard, setCard] = useState<ICard | undefined>(undefined);
			useEffect(() => {
				setCard(card);
				return () => {
					setCard(undefined);
				};
			}, [card]);
			if (curCard !== undefined) {
				return (
					<BenefitCard
						key={v4()}
						heading={curCard.heading}
						text={curCard.text}
						Icon={curCard.Icon}
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
