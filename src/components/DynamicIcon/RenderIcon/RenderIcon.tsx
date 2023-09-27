import { FC } from 'react';
import styles from './RenderIcon.module.scss';
import { replaceAll } from '../utils/replaceAll';

interface IRenderIconProps {
	index: number;
	currentIcon: string[];
	currentSymbol: number;
	newSymbol: number;
	gradient: string[];
	changeSymbol: () => void;
	changeIcon: () => void;
	setIndex: (value: React.SetStateAction<number>) => void;
}

const RenderIcon: FC<IRenderIconProps> = ({
	index,
	currentIcon,
	currentSymbol,
	newSymbol,
	gradient,
	changeSymbol,
	changeIcon,
	setIndex,
}) => {
	const changeIndex = (index: number) => {
		setTimeout(() => {
			if (index === 0) {
				changeIcon();
				changeSymbol();
			}
			setIndex(index);
		}, 100);
	};

	return (
		<>
			{currentIcon.map((line, i) => {
				if (index + 1 < currentIcon.length) {
					changeIndex(index + 1);
				} else {
					changeIndex(0);
				}
				if (i <= index) {
					line = replaceAll(
						line,
						gradient[currentSymbol],
						gradient[newSymbol]
					);
				}
				return <p className={styles.iconLine}>{line}</p>;
			})}
		</>
	);
};

export default RenderIcon;
