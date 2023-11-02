import { FC, useEffect, useState } from 'react';
import styles from './TypingText.module.scss';
import { classNames } from '../utils/classNames';

interface ITypingTextProps {
	text: string;
	speed: number;
	start?: boolean;
	style?: React.CSSProperties | undefined;
	className?: string;
}

const TypingText: FC<ITypingTextProps> = ({
	text,
	speed,
	start,
	style,
	className,
}) => {
	if (start === undefined) {
		start = true;
	}
	text = '   ' + text;
	const [index, setIndex] = useState<number>(0);
	const [typingText, setTypingText] = useState<string>('');

	useEffect(() => {
		if (start) {
			let timeout = setTimeout(() => {
				setTypingText((prev) => [prev, text.charAt(index)].join(''));
				setIndex((prev) => prev + 1);
			}, speed);
			if (index === text.length) {
				window.clearTimeout(timeout);
			}
		}
	}, [index, start]);

	return (
		<div className="TypingText">
			<div className="innerContainer">
				<p
					className={classNames(styles.textField, {}, [
						className ? className : '',
					])}
					style={style}
				>
					{typingText}
					<span className={styles.caret}>|</span>
				</p>
			</div>
		</div>
	);
};

export default TypingText;
