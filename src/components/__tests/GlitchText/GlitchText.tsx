import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './GlitchText.module.scss';
import { useInterval } from 'react-use';

interface IGlitchTextProps {}

const GlitchText: FC<IGlitchTextProps> = ({}) => {
	const text =
		'Война за независимость Сомалиленда (сомал. Dagaalkii Xoraynta Soomaaliland, букв. Сомалилендская освободительная война) — восстание, развязанное Сомалийским национальным движением (СНД) против правительства Сомалийской Демократической Республики во главе с бывшим генералом Мохаммедом Сиадом Барре. Формально началось с основанием СНД 6 апреля 1981 года и закончилось провозглашением независимой республики Сомалиленд 18 мая 1991 года. Данный конфликт, наряду с прочими идущими в то время восстаниями в Сомали, привёл к';

	const [currentText, setText] = useState<string>(text);
	const [glitch, setGlitch] = useState<boolean[]>([]); // состояние с массивом флагов глюка
	const wordArr = useRef<string[]>([]); // ссылка на массив слов из текущего текста

	useEffect(() => {
		setText(text); // обновляем текущий текст при изменении пропса text
	}, [text]);

	useEffect(() => {
		wordArr.current = currentText.split(' '); // обновляем массив слов при изменении текущего текста
	}, [currentText]);

	useEffect(() => {
		setGlitch(wordArr.current.map(() => true)); // создаем массив флагов глюка по количеству слов и устанавливаем все флаги в false
	}, [wordArr]);

	const clear = useInterval(() => {
		setGlitch(
			(prev) => prev.map((flag) => true) // меняем каждый флаг глюка на противоположный с вероятностью 50%
		);
	}, 300);

	const randomChar = useCallback(() => {
		return String.fromCharCode(Math.random() * (175 - 21) + 21); // функция для генерации случайного символа
	}, []);

	const stopGlitch = () => {
		setGlitch((prev) => prev.map((flag) => false));
		// clear();
	};

	return (
		<div className="GlitchText">
			<div className="innerBox">
				<div className={styles.textContainer}>
					{wordArr.current.map((word, index) => {
						return (
							<pre className={styles.word}>
								{word
									.split('')
									.map((letter) => {
										return glitch[index]
											? randomChar()
											: letter;
									})
									.join('')}{' '}
							</pre>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default GlitchText;
export {};
