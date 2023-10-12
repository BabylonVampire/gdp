import { FC, useCallback } from 'react';
import styles from './LetterColumn.module.scss';
import { v4 } from 'uuid';

interface ILetterColumnProps {
	defaultLetter: string;
	alphabet: string[];
	start: boolean;
	// key?: string;
}

const LetterColumn: FC<ILetterColumnProps> = ({
	defaultLetter,
	alphabet,
	start,
	// key,
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
			{[...Array(5)].map(() => (
				<pre className={styles.letter} key={v4()}>
					{randomChar()}
				</pre>
			))}
			<pre className={styles.mainLetter} key={v4()}>
				{defaultLetter}
			</pre>
		</div>
	);
};

export default LetterColumn;
