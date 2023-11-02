import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import styles from './RollingText.module.scss';
import GlitchedHeading from '../GlitchedHeading/GlitchedHeading';
import { regExpToArray } from '../utils/regExpToArray';

interface IRollingTextProps {}

const RollingText: FC<IRollingTextProps> = ({}) => {
	const text = 'HEADING';
	const alphabet = useMemo(() => regExpToArray(/[A-z]/), []);

	const randomChar = useCallback(() => {
		return alphabet[Math.floor(Math.random() * alphabet.length)]; // функция для генерации случайного символа
	}, []);

	const [displayGlitch, setDisplayGlitch] = useState<boolean>(false);

	useEffect(() => {
		const changeToGlitch = setTimeout(() => {
			setDisplayGlitch(true);
			window.clearTimeout(changeToGlitch);
		}, 6500);
	}, []);

	interface IRollLineProps {
		text: string;
	}
	const RollLine: FC<IRollLineProps> = ({ text }) => {
		const [animEnd, setAnimEnd] = useState<boolean | null>(null);

		useEffect(() => {
			setAnimEnd(false);
			const rollUp = setTimeout(() => {
				setAnimEnd(true);
				window.clearTimeout(rollUp);
			}, 5000);
		}, []);

		return (
			<div
				className={styles.rollingText}
				style={{
					height: `calc(var(--font-size-xl) * ${animEnd ? 1 : 5})`,
					transition: '1s',
				}}
			>
				{text.split('').map((letter, index) => {
					let animDur = Math.random() * 3 + 1;
					return (
						<div
							key={letter + `${index}`}
							className={styles.letterBox}
							style={{
								transition: animEnd ? '1s' : `${animDur}s`,
								transform:
									animEnd === null
										? 'translateY(0)'
										: animEnd
										? 'translateY(calc(var(--index) * -29.1))'
										: 'translateY(calc(var(--index) * -22.8))',
							}}
						>
							{[...Array(11)].map((l, i) => {
								return i != 8 ? (
									<div
										key={`letter${text}${i}`}
										className={styles.letter}
										style={{
											width: animEnd
												? '0px'
												: 'var(--font-size-xl)',
											transition: 'all 2s ease-in-out 0s',
										}}
									>
										{animEnd ? '.' : randomChar()}
									</div>
								) : (
									<pre
										key={`letter${text}${i}`}
										className={styles.currentLetter}
										style={{
											animationDelay: `${animDur}s`,
										}}
									>
										{letter}
									</pre>
								);
							})}
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<>
			{displayGlitch ? (
				<GlitchedHeading
					heading={text}
					fontSize="var(--font-size-xl)"
				/>
			) : (
				<RollLine text={text} />
			)}
		</>
	);
};

export default RollingText;
