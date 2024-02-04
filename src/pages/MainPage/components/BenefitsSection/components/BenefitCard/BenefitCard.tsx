import { FC, memo, useState } from 'react';
import styles from './BenefitCard.module.scss';

interface IBenefitCardProps {
	text: string;
	heading: string;
	Icon: React.ReactNode;
}

const BenefitCard: FC<IBenefitCardProps> = memo(({ text, heading, Icon }) => {
	const [falling, setFalling] = useState(false);

	const changeFall = () => {
		setFalling((prev) => !prev);
	};

	const headingAr = heading.split('');
	return (
		<div
			className={styles.benefitCard}
			onMouseEnter={changeFall}
			onMouseLeave={changeFall}
		>
			<div className={styles.innerBox}>
				<span className={styles.flare} />
				<div
					className={`${styles.iconWrapper} ${
						falling ? styles.activeIcon : ''
					}`}
				>
					<div className={styles.iconWrapper}>{Icon}</div>
				</div>
				<div className={styles.contentBox}>
					<div className={styles.heading}>
						{headingAr.map((letter) => {
							return (
								<p
									className={`${styles.letter} ${
										falling ? styles.falling : ''
									}`}
									style={{
										transition: `${Math.random() + 1}s`,
									}}
								>
									{letter}
								</p>
							);
						})}
					</div>
					<div
						className={`${styles.textBox} ${
							falling ? styles.appearingText : ''
						}`}
					>
						<div className={styles.textBoxInnerBox}>{text}</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default BenefitCard;
