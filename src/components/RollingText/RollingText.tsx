import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import styles from './RollingText.module.scss';
import GlitchedHeading from '../GlitchedHeading/GlitchedHeading';
import { regExpToArray } from '../utils/regExpToArray';
import { v4 } from 'uuid';

interface IRollingTextProps {}

const RollingText: FC<IRollingTextProps> = ({}) => {
	const text = 'HEADING';
	const alphabet = useMemo(() => regExpToArray(/[A-z]/), []);

	const randomChar = useCallback(() => {
		return alphabet[Math.floor(Math.random() * alphabet.length)]; // функция для генерации случайного символа
	}, []);

	const [displayGlitch, setDisplayGlitch] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setDisplayGlitch(true);
		}, 6500);
	}, []);

	interface IRollLineProps {
		text: string;
	}
	const RollLine: FC<IRollLineProps> = ({ text }) => {
		const [animEnd, setAnimEnd] = useState<boolean>(false);

		useEffect(() => {
			setTimeout(() => {
				setAnimEnd(true);
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
								animationDuration: `${animDur}s`,
								transition: `1s`,
								transform: animEnd
									? 'translateY(-73.5%)'
									: 'translateY(-57.5%)',
							}}
						>
							<div
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
							<div
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
							<div
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
							<div
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
							<div
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
							<div
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
							<div
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
							<div
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
							<pre
								className={styles.currentLetter}
								style={{ animationDelay: `${animDur}s` }}
							>
								{letter}
							</pre>
							<div
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
							<div
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
