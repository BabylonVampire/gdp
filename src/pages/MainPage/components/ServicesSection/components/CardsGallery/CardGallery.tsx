import { FC, memo, useCallback, useEffect, useState } from 'react';
import { ICardPull } from '../../../../../../types/ICardPull';
import BenefitCard from '../BenefitCard/BenefitCard';
import styles from './CardsGallery.module.scss';
import { ICard } from '../../../../../../types/ICard';
import { v4 } from 'uuid';

interface ICardGalleyProps {
	cardPull: ICardPull;
}

const CardsGallery: FC<ICardGalleyProps> = memo(({ cardPull }) => {
	const emptyPull = { name: '', cardPull: [], backGroundColor: '' };
	const [currentCardPull, setCardPull] = useState<ICardPull>(cardPull);
	useEffect(() => {
		setCardPull(cardPull);
		return () => {
			setCardPull(emptyPull);
		};
	}, [cardPull]);

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
						iconProps={curCard.iconProps}
					/>
				);
			} else {
				return <></>;
			}
		},
		[cardPull]
	);

	return (
		<div
			className={styles.galleriesBox}
			style={{ background: currentCardPull.backGroundColor }}
		>
			<div className={styles.galleryLeft}>
				{currentCardPull.cardPull.map((card, index) => {
					return index % 2 === 0 ? (
						rerenderCard((card = card))
					) : (
						<></>
					);
				})}
			</div>
			<div className={styles.galleryRight}>
				{currentCardPull.cardPull.map((card, index) => {
					return index % 2 === 1 ? (
						rerenderCard((card = card))
					) : (
						<></>
					);
				})}
			</div>
		</div>
	);
});

export default CardsGallery;
