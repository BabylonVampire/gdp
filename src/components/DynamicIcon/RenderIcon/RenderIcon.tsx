import { FC, memo } from 'react';
import styles from './RenderIcon.module.scss';
// import { replaceAll } from '../utils/replaceAll';

interface IRenderIconProps {
	speed: number;
	index: number;
	currentIcon: string[];
	currentSymbol: number;
	newSymbol: number;
	gradient: string[];
	changeSymbol: () => void;
	changeIcon: () => void;
	setIndex: (value: React.SetStateAction<number>) => void;
}

const RenderIcon: FC<IRenderIconProps> = memo(
	({
		// speed,
		// index,
		currentIcon,
		currentSymbol,
		// newSymbol,
		// gradient,
		// changeSymbol,
		// changeIcon,
		// setIndex,
	}) => {
		// const changeIndex = (index: number) => {
		// 	setTimeout(() => {
		// 		if (index === 0) {
		// 			changeIcon();
		// 			changeSymbol();
		// 		}
		// 		setIndex(index);
		// 	}, speed);
		// };

		return (
			<>
				{currentIcon.map((line, i) => {
					// if (index + 1 < currentIcon.length) {
					// 	changeIndex(index + 1);
					// } else {
					// 	changeIndex(0);
					// }
					// if (i <= index) {
					// 	line = replaceAll(
					// 		line,
					// 		gradient[currentSymbol],
					// 		gradient[newSymbol]
					// 	);
					// }
					return (
						<p
							key={line + i + currentSymbol}
							className={styles.iconLine}
						>
							{line}
						</p>
					);
				})}
			</>
		);
	}
);

export default RenderIcon;
