import { FC, useEffect, useState } from 'react';
import styles from './VerticalProgressBar.module.scss';
import { IPoint } from '../../../../types/IPoint';
import TypingText from '../../../../components/TypingText/TypingText';
import { v4 } from 'uuid';

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
						let pos = index % 2 === 0;
						return pos ? (
							<div
								key={point.point.heading + `${index}`}
								className={styles.point}
								style={{
									textAlign: 'end',
								}}
							>
								<div
									className={styles.backDrop}
									style={{
										transition:
											'transition: width 0.5s, background-color 0.3s',
										width:
											clickState === index
												? '50%'
												: '100%',
										left: 0,
									}}
								>
									<div
										className={styles.icon}
										onClick={() => {
											setClickState(index);
										}}
										style={{
											right: '0',
											transition: '0.5s',
											opacity:
												clickState === index ? 0 : 1,
											rotate:
												clickState === index
													? '-180deg'
													: '0deg',
											cursor:
												clickState === index
													? 'auto'
													: 'pointer',
										}}
									>
										{point.point.icon}
									</div>
								</div>
								<div className={styles.heading}>
									{point.point.heading}
								</div>
								<div className={styles.subText}>
									{point.point.subText}
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
										speed={50}
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
						let pos = index % 2 === 1;
						return pos ? (
							<div
								key={point.point.heading + `${index}`}
								className={styles.point}
								style={{
									textAlign: 'start',
								}}
							>
								<div
									className={styles.backDrop}
									style={{
										transition:
											'transition: width 0.5s, background-color 0.3s',
										width:
											clickState === index
												? '50%'
												: '100%',
										right: 0,
									}}
								>
									<div
										className={styles.icon}
										onClick={() => {
											setClickState(index);
										}}
										style={{
											left: '0',
											transition: '0.5s',
											opacity:
												clickState === index ? 0 : 1,
											rotate:
												clickState === index
													? '180deg'
													: '0deg',
											cursor:
												clickState === index
													? 'auto'
													: 'pointer',
										}}
									>
										{point.point.icon}
									</div>
								</div>
								<div className={styles.heading}>
									{point.point.heading}
								</div>
								<div className={styles.subText}>
									{point.point.subText}
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
										speed={50}
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
