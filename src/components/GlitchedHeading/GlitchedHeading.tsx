import { FC } from 'react';
import styles from './GlitchedHeading.module.scss';

interface IGlitchedHeadingProps {
	heading: string;
	fontSize: string;
}

const GlitchedHeading: FC<IGlitchedHeadingProps> = ({ heading, fontSize }) => {
	return (
		<div
			className={styles.glitch}
			data-text={heading}
			style={{
				fontSize: fontSize,
				lineHeight: fontSize,
			}}
		>
			{heading}
		</div>
	);
};

export default GlitchedHeading;
