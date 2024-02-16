import { FC, useCallback } from 'react';
import styles from './LetterColumn.module.scss';

interface ILetterColumnProps {
	defaultLetter: string;
	alphabet: string[];
	start: boolean;
	columnKey?: string;
}

const LetterColumn: FC<ILetterColumnProps> = ({
	defaultLetter,
	alphabet,
	start,
	columnKey,
}) => {
	const randomChar = useCallback(() => {
		return alphabet[Math.floor(Math.random() * alphabet.length)]; // функция для генерации случайного символа
	}, []);
	return (
		<div
			// key={key}
			className={styles.letterColumn}
			style={{
				top: start ? '-500%' : '100%',
				transition: `${Math.random() * 2 + 1}s`,
			}}
		>
			{[...Array(5)].map((_item, index) => {
				const char = randomChar();
				return (
					<pre
						className={styles.letter}
						key={`randomLetter_${char}_${index}_${columnKey}`}
					>
						{char}
					</pre>
				);
			})}
			<pre
				className={styles.mainLetter}
				key={`headingLetter_${defaultLetter}_${columnKey}`}
			>
				{defaultLetter}
			</pre>
		</div>
	);
};

export default LetterColumn;
