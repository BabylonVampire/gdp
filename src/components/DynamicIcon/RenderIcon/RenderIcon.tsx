import { FC, memo } from 'react';
import { v4 } from 'uuid';
// import { replaceAll } from '../utils/replaceAll';
import styles from './RenderIcon.module.scss';

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
		// currentSymbol,
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
				{currentIcon.map((line) => {
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
						<p key={v4()} className={styles.iconLine}>
							{line}
						</p>
					);
				})}
			</>
		);
	}
);

export default RenderIcon;
