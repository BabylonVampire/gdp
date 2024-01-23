import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import styles from './RollingText.module.scss';
import GlitchedHeading from '../GlitchedHeading/GlitchedHeading';
import { regExpToArray } from '../utils/regExpToArray';

interface IRollingTextProps {
	style?: React.CSSProperties;
	text: string;
}

const RollingText: FC<IRollingTextProps> = ({ text, style }) => {
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
					height: `calc(var(--font-size-xl) * ${animEnd ? 1.3 : 5})`,
					transition: '1s',
				}}
			>
				{text.split('').map((letter, index) => {
					const animDur = Math.random() * 3 + 1;
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
										? 'translateY(calc(var(--index) * -28.9))'
										: 'translateY(calc(var(--index) * -23.5))',
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
											...style,
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
					style={{
						textShadow: '0 0 8px white',
						...style,
					}}
				/>
			) : (
				<RollLine text={text} />
			)}
		</>
	);
};

export default RollingText;
