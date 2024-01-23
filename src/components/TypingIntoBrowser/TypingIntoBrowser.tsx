import { FC, PropsWithChildren, useEffect, useState } from 'react';
import styles from './TypingIntoBrowser.module.scss';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import TypingText from '../TypingText/TypingText';
import { useAppSelector } from '../../store/hooks/redux';

interface ITypingIntoBrowserProps {
	text: string;
	speed: number;
	loadingTime: number;
	startAnimation?: boolean | undefined;
}

const TypingIntoBrowser: FC<PropsWithChildren<ITypingIntoBrowserProps>> = ({
	text,
	speed,
	loadingTime,
	children,
	startAnimation,
}) => {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	useEffect(() => {
		setIsLoaded(false);
	}, [children, loadingTime, speed, text]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoaded(true);
		}, loadingTime * 1000);
	}, [loadingTime]);

	const { theme } = useAppSelector((state) => state.themeReducer);

	return (
		<div className={styles.typingIntoBrowser}>
			<div className={styles.contentBox}>
				<TypingText text={text} speed={speed} />
				<div className={styles.searchIcon}>
					<BiSearch />
				</div>
			</div>
			<div className={styles.childrenBox}>
				<div
					className={styles.backGround}
					style={{
						filter: theme.id === 0 ? 'invert(0)' : 'invert(1)',
					}}
				/>
				{isLoaded ? (
					children
				) : (
					<div className={styles.loadingScreen}>
						<div className={styles.loadingIcon}>
							<AiOutlineLoading3Quarters />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default TypingIntoBrowser;
