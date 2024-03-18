import { FC, useState } from 'react';
import TypingText from '../../../../components/TypingText/TypingText';
import { IPoint } from '../../../../types/IPoint';
import styles from './VerticalProgressBar.module.scss';

interface IVerticalProgressBarProps {
	points: IPoint[];
}

const VerticalProgressBar: FC<IVerticalProgressBarProps> = ({ points }) => {
	const [clickState, setClickState] = useState<number>(0);

	return (
		<div className={styles.verticalProgressBar}>
			<div className={styles.innerBox}>
				<div className={styles.leftColumn}>
					{points.map((point, index) => {
						const pos = index % 2 === 0;
						return pos ? (
							<div
								key={point.point.heading + `${index}`}
								className={styles.point}
								style={{
									textAlign: 'end',
								}}
							>
								<div
									className={styles.icon}
									onClick={() => {
										setClickState(index);
									}}
									style={{
										opacity: clickState === index ? 0 : 1,
										rotate:
											clickState === index
												? '-180deg'
												: '0deg',
										cursor:
											clickState === index
												? 'auto'
												: 'pointer',
										right:
											clickState === index ? '3em' : '0',
									}}
								>
									{point.point.icon}
								</div>
							</div>
						) : (
							<div
								key={point.point.heading + `${index}`}
								className={styles.text}
								style={{
									textAlign: 'end',
								}}
							>
								<div className={styles.heading}>
									{point.description.heading}
								</div>
								<div className={styles.description}>
									<TypingText
										text={point.description.description}
										speed={30}
										start={clickState === index}
										style={{
											color: 'var(--font-color-secondary)',
										}}
									/>
								</div>
							</div>
						);
					})}
				</div>
				<div className={styles.barLine}>
					<div
						className={styles.activeBarLine}
						style={{
							transition: '0.3s',
							height: `${
								(clickState * 100) / points.length +
								(50 *
									(clickState + 1 === points.length
										? 2
										: 1)) /
									points.length
							}%`,
						}}
					/>
				</div>
				<div className={styles.rightColumn}>
					{points.map((point, index) => {
						const pos = index % 2 === 1;
						return pos ? (
							<div
								key={point.point.heading + `${index}`}
								className={styles.point}
								style={{
									textAlign: 'start',
								}}
							>
								<div
									className={styles.icon}
									onClick={() => {
										setClickState(index);
									}}
									style={{
										opacity: clickState === index ? 0 : 1,
										rotate:
											clickState === index
												? '180deg'
												: '0deg',
										cursor:
											clickState === index
												? 'auto'
												: 'pointer',
										left:
											clickState === index ? '3em' : '0',
									}}
								>
									{point.point.icon}
								</div>
							</div>
						) : (
							<div
								key={point.point.heading + `${index}`}
								className={styles.text}
								style={{
									textAlign: 'start',
								}}
							>
								<div className={styles.heading}>
									{point.description.heading}
								</div>
								<div className={styles.description}>
									<TypingText
										text={point.description.description}
										speed={30}
										start={clickState === index}
										style={{
											color: 'var(--font-color-secondary)',
										}}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default VerticalProgressBar;
