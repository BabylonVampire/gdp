import { FC, useEffect, useState } from 'react';
import styles from './TypingText.module.scss';

interface ITypingTextProps {}

const TypingText: FC<ITypingTextProps> = ({}) => {
	const text =
		'Война за независимость Сомалиленда (сомал. Dagaalkii Xoraynta Soomaaliland, букв. Сомалилендская освободительная война) — восстание, развязанное Сомалийским национальным движением (СНД)';
	const [index, setIndex] = useState<number>(-1);
	const [typingText, setTypingText] = useState<string>(text.charAt(0));

	useEffect(() => {
		let timeout = setTimeout(() => {
			setTypingText((prev) => [prev, text.charAt(index)].join(''));
			setIndex((prev) => prev + 1);
		}, 50);
		if (index === text.length) {
			window.clearTimeout(timeout);
		}
	}, [index]);

	return (
		<div className="TypingText">
			<div className="innerContainer">
				<p className={styles.textField}>
					{typingText}
					<span className={styles.corret}>|</span>
				</p>
			</div>
		</div>
	);
};

export default TypingText;
