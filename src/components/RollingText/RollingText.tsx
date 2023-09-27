import { FC, useCallback, useEffect, useState } from 'react';
import styles from './RollingText.module.scss';
import GlitchedHeading from '../GlitchedHeading/GlitchedHeading';

interface IRollingTextProps {}

const RollingText: FC<IRollingTextProps> = ({}) => {
	const text = 'HEADING';

	const randomChar = useCallback(() => {
		return String.fromCharCode(Math.random() * (122 - 97) + 97); // функция для генерации случайного символа
	}, []);

	const [displayGlitch, setDisplayGlitch] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setDisplayGlitch(true);
		}, 6000);
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
				{text.split('').map((letter) => {
					let animDur = Math.random() * 3 + 1;
					return (
						<div
							className={styles.letterBox}
							style={{
								animationDuration: `${animDur}s`,
								marginLeft: animEnd ? '0px' : '20px',
								transition: `1s`,
								transform: animEnd
									? 'translateY(-73%)'
									: 'translateY(-57.5%)',
							}}
						>
							<div className={styles.letter}>
								{animEnd ? '.' : randomChar()}
							</div>
							<div className={styles.letter}>
								{animEnd ? '.' : randomChar()}
							</div>
							<div className={styles.letter}>
								{animEnd ? '.' : randomChar()}
							</div>
							<div className={styles.letter}>
								{animEnd ? '.' : randomChar()}
							</div>
							<div className={styles.letter}>
								{animEnd ? '.' : randomChar()}
							</div>
							<div className={styles.letter}>
								{animEnd ? '.' : randomChar()}
							</div>
							<div className={styles.letter}>
								{animEnd ? '.' : randomChar()}
							</div>
							<div className={styles.letter}>
								{animEnd ? '.' : randomChar()}
							</div>
							<pre
								className={styles.currentLetter}
								style={{ animationDelay: `${animDur}s` }}
							>
								{letter}
							</pre>
							<div className={styles.letter}>
								{animEnd ? '.' : randomChar()}
							</div>
							<div className={styles.letter}>
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
