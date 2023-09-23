import { FC, useState } from 'react';
import styles from './DynamicIcon.module.scss';

interface IDynamicIconProps {}

const DynamicIcon: FC<IDynamicIconProps> = ({}) => {
	let icon = ['888', '88888', '8  8  8', '8  8  8', '88888', '| | |', '888'];

	const [currentIcon, setIcon] = useState(JSON.parse(JSON.stringify(icon)));

	const gradient = ['8', '0', '#', '0'];
	const [currentIndex, setIndex] = useState(0);

	const [newSymbol, setNewSymbol] = useState(1);
	const [currentSymbol, setSymbol] = useState(0);

	const replaceAll = (string: string, search: string, replace: string) => {
		return string.split(search).join(replace);
	};

	const changeIndex = (index: number) => {
		setTimeout(() => {
			if (index === 0) {
				changeIcon();
				changeSymbol();
			}
			setIndex(index);
		}, 100);
	};

	const changeIcon = () => {
		let newIcon = JSON.parse(JSON.stringify(currentIcon));
		newIcon = newIcon.map((line: string) => {
			return replaceAll(
				line,
				gradient[currentSymbol],
				gradient[newSymbol]
			);
		});
		setIcon(newIcon);
	};

	const changeSymbol = () => {
		setSymbol((currentSymbol + 1) % gradient.length);
		setNewSymbol((newSymbol + 1) % gradient.length);
	};

	interface IRenderIconProps {
		index: number;
	}

	const RenderIcon: FC<IRenderIconProps> = ({ index }) => {
		return (
			<>
				{currentIcon.map((line: string, i: number) => {
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

	return (
		<div className={styles.dynamicIcon}>
			<div className={styles.innerBox}>
				<RenderIcon index={currentIndex} />
			</div>
		</div>
	);
};

export default DynamicIcon;
