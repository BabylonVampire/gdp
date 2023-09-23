import { FC, useState } from 'react';
import styles from './BenefitCard.module.scss';
import DynamicIcon from '../../../../../../components/DynamicIcon/DynamicIcon';

interface IBenefitCardProps {}

const BenefitCard: FC<IBenefitCardProps> = ({}) => {
	const [falling, setFalling] = useState(false);

	const changeFall = () => {
		setFalling(!falling);
	};

	let heading = 'Преимущество';
	const headingAr = heading.split('');
	return (
		<div className={styles.benefitCard} onClick={changeFall}>
			<div className={styles.innerBox}>
				<div
					className={`${styles.iconWrapper} ${
						falling ? styles.activeIcon : ''
					}`}
				>
					<DynamicIcon />
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
						<div className={styles.textBoxInnerBox}>
							asd asdasd asdas asd asd asdasd asdasd asda asda asd
							asdsdsda asdasd asd
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BenefitCard;
