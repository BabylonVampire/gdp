import { FC, useState } from 'react';
import styles from './DynamicIcon.module.scss';
import { replaceAll } from './utils/replaceAll';
import RenderIcon from './RenderIcon/RenderIcon';
import { IIcon } from '../../types/IIcon';

interface IDynamicIconProps {
	iconProps: IIcon;
}

const DynamicIcon: FC<IDynamicIconProps> = ({ iconProps }) => {
	let icon = iconProps.icon;
	const gradient = iconProps.gradient;
	const [currentIcon, setIcon] = useState<string[]>(icon);
	const [currentIndex, setIndex] = useState<number>(0);
	const [newSymbol, setNewSymbol] = useState<number>(1);
	const [currentSymbol, setSymbol] = useState<number>(0);

	const changeIcon = () => {
		setIcon(
			currentIcon.map((line: string) => {
				return replaceAll(
					line,
					gradient[currentSymbol],
					gradient[newSymbol]
				);
			})
		);
	};

	const changeSymbol = () => {
		setSymbol((currentSymbol + 1) % gradient.length);
		setNewSymbol((newSymbol + 1) % gradient.length);
	};

	return (
		<div className={styles.dynamicIcon}>
			<div className={styles.innerBox}>
				<RenderIcon
					index={currentIndex}
					currentIcon={currentIcon}
					currentSymbol={currentSymbol}
					newSymbol={newSymbol}
					gradient={gradient}
					changeSymbol={changeSymbol}
					changeIcon={changeIcon}
					setIndex={setIndex}
				/>
			</div>
		</div>
	);
};

export default DynamicIcon;
