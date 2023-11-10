import { FC, memo, useEffect, useState } from 'react';
import styles from './BenefitCard.module.scss';
import DynamicIcon from '../../../../../../components/DynamicIcon/DynamicIcon';
import { IIcon } from '../../../../../../types/IIcon';
import { v4 } from 'uuid';

interface IBenefitCardProps {
	text: string;
	heading: string;
	iconProps: IIcon;
}

const BenefitCard: FC<IBenefitCardProps> = memo(
	({ text, heading, iconProps }) => {
		const emptyIcon: IIcon = {
			icon: [],
			gradient: [],
			speed: 0,
		};
		const [falling, setFalling] = useState(false);
		const [icon, setIcon] = useState<IIcon>(iconProps);

		useEffect(() => {
			setIcon(iconProps);
			return () => {
				setFalling(false);
				setIcon(emptyIcon);
			};
		}, [iconProps]);

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
						<DynamicIcon iconProps={icon} />
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
	}
);

export default BenefitCard;
